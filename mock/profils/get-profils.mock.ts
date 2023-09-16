import {defineMock} from "vite-plugin-mock-dev-server";

import profils from "./profils";

import type {ProfilItem} from "../../src/model/securite/profil/profil-item";

export default defineMock({
    url: "/api/profils",
    delay: 100,
    body: () =>
        profils.value.map(
            ({id, libelle, utilisateurs}) => ({id, libelle, nombreUtilisateurs: utilisateurs?.length} as ProfilItem)
        )
});
