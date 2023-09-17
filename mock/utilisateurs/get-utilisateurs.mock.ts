import {defineMock} from "vite-plugin-mock-dev-server";

import utilisateurs from "./utilisateurs";

import type {UtilisateurItem} from "../../src/model/securite/utilisateur/utilisateur-item";

export default defineMock({
    url: "/api/utilisateurs",
    delay: 100,
    body: () =>
        utilisateurs.value.map(
            ({id, nom, prenom, email, typeUtilisateurCode}) =>
                ({id, nom, prenom, email, typeUtilisateurCode} as UtilisateurItem)
        )
});
