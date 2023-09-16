import {defineMock} from "vite-plugin-mock-dev-server";

import type {Droit, TypeDroit} from "../src/model/securite/profil/references";
import type {TypeUtilisateur} from "../src/model/securite/utilisateur/references";

export default defineMock({
    url: "/api/references/:name",
    delay: 100,
    body: ({params: {name}}) => {
        switch (name) {
            case "droit":
                return [
                    {code: "CREATE", libelle: "Création", typeDroitCode: "WRITE"},
                    {code: "READ", libelle: "Lecture", typeDroitCode: "READ"},
                    {code: "UPDATE", libelle: "Mise à jour", typeDroitCode: "WRITE"},
                    {code: "DELETE", libelle: "Suppression", typeDroitCode: "ADMIN"}
                ] as Droit[];
            case "typeDroit":
                return [
                    {code: "READ", libelle: "Lecture"},
                    {code: "WRITE", libelle: "Ecriture"},
                    {code: "ADMIN", libelle: "Administration"}
                ] as TypeDroit[];
            case "typeUtilisateur":
                return [
                    {code: "ADMIN", libelle: "Administrateur"},
                    {code: "GEST", libelle: "Gestionnaire"},
                    {code: "CLIENT", libelle: "Client"}
                ] as TypeUtilisateur[];
        }
    }
});
