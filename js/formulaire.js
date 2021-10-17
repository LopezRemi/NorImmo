
// fonction de validation avant envoi formulaire
document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let phone = document.getElementById("telephone");


    if(!prenom.value || prenom.value.lenght < 2 || prenom.value.length > 10) {
        erreur = "Votre prénom n'est pas valide";
        prenom.classList.add('red');
    }else{
        prenom.classList.add('green');
    }
    if(!nom.value || nom.value.lenght < 2 || nom.value.length > 10) {
        erreur = "Votre nom n'est pas valide";
        nom.classList.add('red');
    }else{
        nom.classList.add('green');
    }
  

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        alert('Erreur formulaire !');
        return false;
    } else {
        alert('Formulaire envoyé !');
    }

})

// fonction pour afficher nombre de caractères restants
function reste(texte)
{
    let restants=400-texte.length;
    document.getElementById('caracteres').innerHTML=restants;
}

//  On focus out les insultes seront remplacées par des symboles
document.getElementById("text-area").addEventListener("focusout",function() {
    let textArea = document.getElementById("text-area");
     let regEx_1 = /\b(sexe|sex|connard|con)\b/i;
     textArea.value = textArea.value.replace(regEx_1, "*!@?$");
});

// récupération du premier élément du tableau alpha soit nom
document.getElementsByClassName("alpha")[0].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[0];
    let error = document.getElementById("firstNameError");
    checkIsAlphabetical(alphaB, error);
});

// récupération du deuxième élément du tableau alpha soit prénom
document.getElementsByClassName("alpha")[1].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[1];
    let error = document.getElementById("lastNameError");
    checkIsAlphabetical(alphaB, error);
});

// récupération l'input du téléphone
document.getElementById("telephone").addEventListener("focusout", function(){
    let telephoneInput = document.getElementsByClassName("telephone");
    let error = document.getElementById("phoneError");
    checkIsPhoneNum(telephoneInput, error);
});

// Vérification par regex des alphaB
function checkIsAlphabetical(alphaB, error){
    let regEx_2 = /[a-zA-Z\s-]*/;

    if (alphaB.value != "" && alphaB.value == alphaB.value.match(regEx_2)){
        alphaB.classList.add('green');
        alphaB.classList.remove('red');
        error.style.display = "none";
    }
    else {
        alphaB.classList.add('red');
        alphaB.classList.remove('green');
        error.style.display = "inline";
    }
}

// Vérification du numéro de téléphone format FR

function checkIsPhoneNum(phone, error) {
    let regEx_3 = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
    console.log(regEx_3.test(phone.value));
    if (phone.value != "" && phone.value == phone.value.match(regEx_3)){
        phone.classList.add('green');
        phone.classList.remove('red');
        PhoneError.style.display = "none";
    }
    else {
        phone.classList.add('red');
        phone.classList.remove('green');
        phoneError.style.display = "inline";
    }
}



// ############################ zone de test ######################################

// document.getElementById("prenom").addEventListener("focusout", function() {


//     if(!prenom.value || prenom.value.lenght < 2 || prenom.value.length > 10) {
//         prenom.classList.add('red').innerHTML="Votre prénom n'est pas valide";
//     }else{
//         prenom.classList.add('green');
//     }
// })

// document.getElementById("nom").addEventListener("focusout", function() {

//     if(!nom.value || nom.value.lenght < 2 || nom.value.length > 10) {
//         erreur = "Votre nom n'est pas valide";
//         nom.classList.add('red');
//     }else{
//         nom.classList.add('green');
//     }

// })