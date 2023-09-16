import {DateTime} from "luxon";
import {defineMock} from "vite-plugin-mock-dev-server";

import profils from "./profils";

export default defineMock({
    url: "/api/profils/:id",
    method: "PUT",
    delay: 100,
    body: ({params: {id}, body}) => {
        const profil = profils.value.find(pro => pro.id === +id)!;
        profil.libelle = body.libelle;
        profil.droits = body.droits;
        profil.dateModification = DateTime.utc().toISO()!;
        return profil;
    }
});
