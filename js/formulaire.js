document. getElementById("contact").addEventListener("submit", function(e) {
    let erreur;
    
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let telephone = document.getElementById("telephone");

    if(!telephone.value) {
        erreur = "Votre numéro de téléphone n'est pas valide";
    }
    
    if(!prenom.value) {
        erreur = "Votre prénom n'est pas valide";
    }

    if(!nom.value) {
        erreur = "Votre nom n'est pas valide";
    }
  
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }

    let textarea = document.querySelector('textarea');
    
    textarea.style.resized = 'none'
})