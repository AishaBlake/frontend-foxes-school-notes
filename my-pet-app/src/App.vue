<template>
	<v-app>
		<v-main class="dogs-layout">
			<v-container fill-height>
				<div class="dogs-overlay">
					<h1 class="display-2 text-xs-center">Choose your favorite dogs</h1>
					<v-card class="dog-card">
						<v-img height="400px" :src="currentDogLink"></v-img>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn icon @click="addToFavorites" :disabled="isAlreadyInFavorites">
								<v-icon>favorite</v-icon>
							</v-btn>
							<v-btn icon @click="loadNewDog">
								<v-icon>forward</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
          <v-container grid-list-md fluid>
            <v-layout wrap>
              <v-flex xs6 sm4 md2 v-for="(pet, index) in favoriteDogs" :key="pet">
                <v-card class="dog-card">
                  <v-img height="150px" :src="pet"></v-img>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="removeFromFavorites(index)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
				</div>
			</v-container>
		</v-main>
	</v-app>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentDogLink: "",
      favoriteDogs: []
    };
  },
  computed: {
    isAlreadyInFavorites() {
      return this.favoriteDogs.indexOf(this.currentDogLink) > -1;
    }
  },
  created() {
    this.loadNewDog();
  },
  methods: {
    loadNewDog() {
      axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
          this.currentDogLink = response.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToFavorites() {
      this.favoriteDogs.push(this.currentDogLink);
    },
    removeFromFavorites(index) {
      this.favoriteDogs.splice(index, 1);
    }
  }
};
</script>


<style>
img {
  max-width: 100%;
}

h1 {
  padding-bottom: 15px;
}

.dogs-layout {
  width: 100%;
  background: #fff center repeat;
  background-image: url("https://github.com/FrontEndFoxes/projects/blob/main/petshop/images/bg3.jpg?raw=true");
}

.dogs-overlay {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .dogs-overlay {
    margin: 0;
  }
}

.dog-card {
  width: 100%;
  max-width: 600px;
}
</style>
