import {range, sample} from "es-toolkit";
import {DateTime} from "luxon";
import {defineMockData} from "vite-plugin-mock-dev-server";

import type {TypeUtilisateurCode} from "../../src/model/securite/utilisateur/references";
import type {UtilisateurRead} from "../../src/model/securite/utilisateur/utilisateur-read";

export default defineMockData(
    "utilisateurs",
    range(1, 51).map(utiId => {
        const prenoms = ["Philippe", "Michel", "Christophe"];
        const typeUtilisateurs = ["ADMIN", "CLIENT", "GEST"] as TypeUtilisateurCode[];

        const nom = `Nom ${utiId}`;
        const prenom = `${Math.random() > 0.5 ? "Jean-" : ""}${sample(prenoms)}`;

        return {
            id: utiId,
            nom,
            prenom,
            actif: true,
            profilId: sample(range(1, 11)),
            dateNaissance: DateTime.utc()
                .minus(Math.floor(Math.random() * 1_000_000_000_000))
                .toFormat("yyyy-MM-dd"),
            email: `${prenom.replace(/ /g, "").toLowerCase()}.${nom.replace(/ /g, "").toLowerCase()}@yopmail.com`,
            typeUtilisateurCode: sample(typeUtilisateurs),
            dateCreation: DateTime.utc()
                .minus(Math.floor(Math.random() * 1_000_000_000))
                .toISO(),
            dateModification:
                Math.random() > 0.5
                    ? DateTime.utc()
                          .minus(Math.floor(Math.random() * 1_000_000))
                          .toISO()
                    : undefined
        } as UtilisateurRead;
    })
);
