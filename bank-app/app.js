const routes = {
  '/login': { 
    templateId: 'login',
    title: 'Login'
  },
  '/dashboard': { 
    templateId: 'dashboard',
    title: 'Dashboard',
    init: refresh
  },
};

const storageKey = 'savedAccount';

let state = Object.freeze({
  account: null
});

function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });

  localStorage.setItem(storageKey, JSON.stringify(state.account));
}

function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(textOrNode);
}

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  console.log(`ROUTE: ${route}`);

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);

  if (typeof route.init === 'function') {
    route.init();
  }

  document.title = route.title;
}

function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateRoute();
}

function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}

async function refresh() {
  await updateAccountData();
  updateDashboard();
}

async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return updateElement('loginError', data.error);
  }

  updateState('account', data);
  navigate('/dashboard');
  updateDashboard();
}

async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}


async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);

  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occured:', result.error);
  }

  updateState('account', result);
  console.log('Account created!', result);
  navigate('/dashboard');
  updateDashboard();
}

async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

function updateDashboard() {
  const account = state.account;
  console.log("update dashboard: " + account);

  if (!account) {
    return logout();
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);

  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
    const transactionRow = createTransactionRow(transaction);
    transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);
}

function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}

function logout() {
  updateState('account', null);
  navigate('/login');
}

function init() {
  const savedAccount = localStorage.getItem(storageKey);

  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();