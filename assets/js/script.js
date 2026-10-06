let formulaire = document.getElementById("formulaire");
let erreur = document.getElementById("erreur");

formulaire.addEventListener("submit", function(event) {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (nom == "" || email == "" || message == "") {
        event.preventDefault();
        erreur.innerHTML = "Veuillez remplir tous les champs.";
    }
});
