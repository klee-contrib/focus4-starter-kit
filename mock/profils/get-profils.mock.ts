import {defineMock} from "vite-plugin-mock-dev-server";

import type {ProfilItem} from "../../src/model/securite/profil/profil-item";

import profils from "./profils";

export default defineMock({
    url: "/api/profils",
    delay: 100,
    body: () =>
        profils.value.map(
            ({id, libelle, utilisateurs}) => ({id, libelle, nombreUtilisateurs: utilisateurs?.length}) as ProfilItem
        )
});
