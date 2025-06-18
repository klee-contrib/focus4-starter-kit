import {defineMock} from "vite-plugin-mock-dev-server";

import type {UtilisateurItem} from "../../src/model/securite/utilisateur/utilisateur-item";

import utilisateurs from "./utilisateurs";

export default defineMock({
    url: "/api/utilisateurs",
    method: "GET",
    delay: 100,
    body: () =>
        utilisateurs.value.map(
            ({id, nom, prenom, email, typeUtilisateurCode}) =>
                ({id, nom, prenom, email, typeUtilisateurCode}) as UtilisateurItem
        )
});
