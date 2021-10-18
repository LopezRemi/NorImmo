
var isThereAnErrorOnMyInputs = false;

// récupération du premier élément du tableau alpha soit prénom
document.getElementsByClassName("alpha")[0].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[0];
    let error = document.getElementById("firstNameError");
    isThereAnErrorOnMyInputs = checkIsAlphabetical(alphaB, error);
});

// récupération du deuxième élément du tableau alpha soit nom
document.getElementsByClassName("alpha")[1].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[1];
    let error = document.getElementById("lastNameError");
    isThereAnErrorOnMyInputs = checkIsAlphabetical(alphaB, error);
});


// Vérification par regex des alphaB
function checkIsAlphabetical(alphaB, error){
    let regEx_2 = /[a-zA-Z\s-]*/;

    if (alphaB.value != "" && alphaB.value == alphaB.value.match(regEx_2)){
        alphaB.classList.add('green');
        alphaB.classList.remove('red');
        error.style.display = "none";
        return false;
    }
    else {
        alphaB.classList.add('red');
        alphaB.classList.remove('green');
        error.style.display = "inline";
        return true;
    } 
}

// récupération l'input du téléphone
document.getElementById("telephone").addEventListener("focusout", function(){
    let telephoneInput = document.getElementById("telephone");
    let error = document.getElementById("phoneError");
    isThereAnErrorOnMyInputs = checkIsPhoneNum(telephoneInput, error);

});


// Vérification du numéro de téléphone format FR
function checkIsPhoneNum(phone, error) {
    let regEx_3 = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;

    if (phone.value != "" && phone.value == phone.value.match(regEx_3)){
        phone.classList.add('green');
        phone.classList.remove('red');
        error.style.display = "none";
        return false;
    }
    else {
        phone.classList.add('red');
        phone.classList.remove('green');
        error.style.display = "inline";
        return true;
    }
}
// Vérification du textarea

document.getElementById("text-area").addEventListener("focusout",function() {
    let textArea = document.getElementById("text-area");
    let error1 = document.getElementById("messageError");
    let error2 = document.getElementById("messageError_2");
    isThereAnErrorOnMyInputs = checkNoInsult(textArea, error1, error2);
});

function checkNoInsult(textArea, error1, error2) {
    let regEx_1 = /\b(sexe|sex|connard|con)\b/i;

    if (textArea.value == ""){
        textArea.classList.add('red');
        textArea.classList.remove('green');
        error1.style.display = "none";
        error2.style.display = "inline";
        return true;
    }
    else if (textArea.value.match(regEx_1)){
        textArea.classList.add('red');
        textArea.classList.remove('green');
        error1.style.display = "inline";
        error2.style.display = "none";
        return true;
    }
    else {
        textArea.classList.add('green');
        textArea.classList.remove('red');
        error1.style.display = "none";
        error2.style.display = "none";
        return false;
    }
}

function reste(texte)
{
    let restants=400-texte.length;
    document.getElementById('caracteres').innerHTML=restants;
}

// fonction de validation avant envoi formulaire
// document.getElementById("contact").addEventListener("submit", function(e) {
//     e.preventDefault();
    
    let erreur;
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let phone = document.getElementById("telephone");
    let textArea = document.getElementById("text-area");



// ############################ zone de test ######################################

document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(isThereAnErrorOnMyInputs);
    if (isThereAnErrorOnMyInputs === true) {
        alert('Erreur formulaire !');
        return;
    
    }
    else {
        alert('Formulaire envoyé !');
    }
});
