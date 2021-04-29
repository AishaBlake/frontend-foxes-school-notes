let hairTypes = ["3c", "3b", "3a"];

function getHairType(hairInput) {
    let hairTypeResult = "";

    if (hairTypes.includes(hairInput)) {
        switch(hairInput[1]) {
            case 'a':
                hairTypeResult += "a bit";
                break;
            case 'b':
                hairTypeResult += "moderately";
                break;
            case 'c':
                hairTypeResult += "very";
                break;
        }

        switch(hairInput[0]) {
            case '1':
                hairTypeResult += " straight";
                break;
            case '2':
                hairTypeResult += " wavy";
                break;
            case '3':
                hairTypeResult += " curly";
                break;
            default:
                hairTypeResult += " of some type of hair";
        }
    }
    console.log(hairTypeResult);
}

getHairType("3a");
