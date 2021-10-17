


// récupération du premier élément du tableau alpha soit prénom
document.getElementsByClassName("alpha")[0].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[0];
    let error = document.getElementById("firstNameError");
    checkIsAlphabetical(alphaB, error);
});

// récupération du deuxième élément du tableau alpha soit nom
document.getElementsByClassName("alpha")[1].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[1];
    let error = document.getElementById("lastNameError");
    checkIsAlphabetical(alphaB, error);
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


// récupération l'input du téléphone
document.getElementById("telephone").addEventListener("focusout", function(){
    let telephoneInput = document.getElementById("telephone");
    let error = document.getElementById("phoneError");
    checkIsPhoneNum(telephoneInput, error);
});


// Vérification du numéro de téléphone format FR
function checkIsPhoneNum(phone, error) {
    let regEx_3 = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;

    if (phone.value != "" && phone.value == phone.value.match(regEx_3)){
        phone.classList.add('green');
        phone.classList.remove('red');
        error.style.display = "none";
    }
    else {
        phone.classList.add('red');
        phone.classList.remove('green');
        error.style.display = "inline";
    }
}
// Vérification du textarea

document.getElementById("text-area").addEventListener("focusout",function() {
    let textArea = document.getElementById("text-area");
    let error = document.getElementById("messageError");
    checkNoInsult(textArea, error);
});

function checkNoInsult(textArea, error) {
    let regEx_1 = /\b(sexe|sex|connard|con)\b/i;

    if (textArea.value == "" || textArea.value.match(regEx_1)){
        textArea.classList.add('red');
        textArea.classList.remove('green');
        error.style.display = "inline";
        
    }
    else {
        textArea.classList.add('green');
        textArea.classList.remove('red');
        error.style.display = "none";
    }
}

function reste(texte)
{
    let restants=400-texte.length;
    document.getElementById('caracteres').innerHTML=restants;
}

// fonction de validation avant envoi formulaire
document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let phone = document.getElementById("telephone");
    let textArea = document.getElementById("text-area");



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




// ############################ zone de test ######################################

