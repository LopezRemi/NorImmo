document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let telephone = document.getElementById("telephone");
    let choice = document.getElementsByClassName("choice.value");
    console.log(choice);

   
    if(!telephone.value.length == 10 ) {
        erreur = "Votre numéro de téléphone n'est pas valide";
    }

    if(!prenom.value || prenom.value.lenght < 2 || prenom.value.length > 10) {
        erreur = "Votre prénom n'est pas valide";
    }

    if(!nom.value || nom.value.lenght < 2 || nom.value.length > 10) {
        erreur = "Votre nom n'est pas valide";
    }
    // if(textarea.length > 200) {
    //     erreur = "Votretexte est trop long";
    // }
  
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
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
     let regEx = /\b(sexe|sex|connard|con)\b/i;
     textArea.value = textArea.value.replace(regEx, "*!@?$");
});



