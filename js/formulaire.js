document. getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let telephone = document.getElementById("telephone");
    let choice = document.getElementsByClassName("choice.value");
    console.log(choice);

    // if(textarea.required = false) {
    //     erreur = "Votretexte est trop long";
    // }

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

// function MaxLengthTextarea(objettextarea,maxlength){
//     if (objettextarea.value.length > maxlength) {
//       objettextarea.value = objettextarea.value.substring(0, maxlength);
//       alert('Votre texte ne doit pas dépasser '+maxlength+' caractères!');
//      }







//      let textarea = document.querySelector('textarea');
    
//      textarea.style.resized = 'none'
//     } 