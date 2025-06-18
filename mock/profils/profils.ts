import {range, sampleSize} from "es-toolkit";
import {DateTime} from "luxon";
import {defineMockData} from "vite-plugin-mock-dev-server";

import type {ProfilRead} from "../../src/model/securite/profil/profil-read";
import type {DroitCode} from "../../src/model/securite/profil/references";
import utilisateurs from "../utilisateurs/utilisateurs";

export default defineMockData(
    "profils",
    range(1, 11).map(proId => {
        const droits = ["CREATE", "DELETE", "READ", "UPDATE"] as DroitCode[];
        return {
            id: proId,
            libelle: `Profil ${proId}`,
            dateCreation: DateTime.utc()
                .minus(Math.floor(Math.random() * 1_000_000_000))
                .toISO(),
            dateModification:
                Math.random() > 0.5
                    ? DateTime.utc()
                          .minus(Math.floor(Math.random() * 1_000_000))
                          .toISO()
                    : undefined,
            droits: sampleSize(droits, Math.ceil(Math.random() * 4)),
            utilisateurs: utilisateurs.value
                .filter(uti => uti.profilId === proId)
                .map(({id, nom, prenom, email, typeUtilisateurCode}) => ({id, nom, prenom, email, typeUtilisateurCode}))
        } as ProfilRead;
    })
);
