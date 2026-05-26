Feature("Utilisateurs");

const {utilisateurs} = inject();

Scenario("Ajouter un utilisateur", () => {
    utilisateurs.ajouterUtilisateur();
    utilisateurs.verifierUtilisateurCree();
    utilisateurs.desactiverUtilisateur();
});
