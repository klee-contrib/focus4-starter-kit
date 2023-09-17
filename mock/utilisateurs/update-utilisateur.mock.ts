import {DateTime} from "luxon";
import {defineMock} from "vite-plugin-mock-dev-server";

import utilisateurs from "./utilisateurs";

export default defineMock({
    url: "/api/utilisateurs/:id",
    method: "PUT",
    delay: 100,
    body: ({params: {id}, body}) => {
        const utilisateur = utilisateurs.value.find(pro => pro.id === +id)!;
        utilisateur.nom = body.nom;
        utilisateur.prenom = body.prenom;
        utilisateur.actif = body.actif;
        utilisateur.email = body.email;
        utilisateur.dateNaissance = body.dateNaissance;
        utilisateur.typeUtilisateurCode = body.typeUtilisateurCode;
        utilisateur.profilId = body.profilId;
        utilisateur.dateModification = DateTime.utc().toISO()!;
        return utilisateur;
    }
});
