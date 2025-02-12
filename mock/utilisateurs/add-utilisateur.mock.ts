import {DateTime} from "luxon";
import {defineMock} from "vite-plugin-mock-dev-server";

import {UtilisateurRead} from "../../src/model/securite/utilisateur/utilisateur-read";

import utilisateurs from "./utilisateurs";

export default defineMock({
    url: "/api/utilisateurs",
    method: "POST",
    delay: 100,
    body: ({body}) => {
        const utilisateur: UtilisateurRead = {
            actif: true,
            adresse: body.adresse,
            dateCreation: DateTime.utc().toISO(),
            dateNaissance: body.dateNaissance,
            email: body.email,
            id: Math.max(...utilisateurs.value.map(u => u.id!)) + 1,
            nom: body.nom,
            prenom: body.prenom,
            profilId: body.profilId,
            typeUtilisateurCode: body.typeUtilisateurCode
        };

        utilisateurs.value.push(utilisateur);

        return utilisateur;
    }
});
