document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let telephone = document.getElementById("telephone");
    let choice = document.getElementsByClassName("choice.value");

    if(telephone.value.length != 10) {
        erreur = "Votre numéro de téléphone n'est pas valide"; 
         //telephone.style.border = 'red';
        telephone.classList.add('red');
    }else{
        telephone.classList.remove('red');
    }

    if(!prenom.value || prenom.value.lenght < 2 || prenom.value.length > 10) {
        erreur = "Votre prénom n'est pas valide";
        prenom.classList.add('red');
    }else{
        prenom.classList.remove('red');
    }
    if(!nom.value || nom.value.lenght < 2 || nom.value.length > 10) {
        erreur = "Votre nom n'est pas valide";
        nom.classList.add('red');
    }else{
        nom.classList.remove('red');
    }
    // if(textarea.length > 200) {
    //     erreur = "Votre texte est trop long";
    // }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        alert('Erreur formulaire !');
        return false;
    } else {
        alert('Formulaire envoyé !');
    }

})

function reste(texte)
{
    let restants=200-texte.length;
    document.getElementById('caracteres').innerHTML=restants;
}


document.getElementById("text-area").addEventListener("focusout",function() {
    let textArea = document.getElementById("text-area");
     let regEx_1 = /\b(sexe|sex|connard|con)\b/i;
     textArea.value = textArea.value.replace(regEx_1, "*!@?$");
});

document.getElementsByClassName("alpha")[0].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[0];
    checkIsAlphabetical(alphaB);
});

document.getElementsByClassName("alpha")[1].addEventListener("focusout", function(){
    let alphaB = document.getElementsByClassName("alpha")[1];
    checkIsAlphabetical(alphaB);
});


function checkIsAlphabetical(alphaB){
    let regEx_2 =/[a-zA-Z\s-]*/;
    alphaB.value = alphaB.value.match(regEx_2);
}

document.getElementById("telephone").addEventListener("focusout",function() {
    let verifNum = document.getElementById("telephone");
     let regEx_3 = /\d+/;
     verifNum.value = verifNum.value.match(regEx_3);
});