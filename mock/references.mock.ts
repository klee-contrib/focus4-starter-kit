import {defineMock} from "vite-plugin-mock-dev-server";

import type {Droit, TypeDroit} from "../src/model/securite/profil/references";
import {type TypeUtilisateur} from "../src/model/securite/utilisateur/references";

const labels = {
    fr: {
        droit: {
            CREATE: "Création",
            READ: "Lecture",
            UPDATE: "Mise à jour",
            DELETE: "Suppression"
        },
        typeDroit: {
            READ: "Lecture",
            WRITE: "Ecriture",
            ADMIN: "Administration"
        },
        typeUtilisateur: {
            ADMIN: "Administrateur",
            GEST: "Gestionnaire",
            CLIENT: "Client"
        }
    },
    en: {
        droit: {
            CREATE: "Create",
            READ: "Read",
            UPDATE: "Update",
            DELETE: "Delete"
        },
        typeDroit: {
            READ: "Read",
            WRITE: "Write",
            ADMIN: "Admin"
        },
        typeUtilisateur: {
            ADMIN: "Administrator",
            GEST: "Manager",
            CLIENT: "Client"
        }
    }
};

export default defineMock({
    url: "/api/references/:name",
    delay: 100,
    body: ({headers: {"accept-language": language}, params: {name}}) => {
        switch (name) {
            case "droit":
                return [
                    {code: "CREATE", libelle: labels[language as "fr"].droit.CREATE, typeDroitCode: "WRITE"},
                    {code: "READ", libelle: labels[language as "fr"].droit.READ, typeDroitCode: "READ"},
                    {code: "UPDATE", libelle: labels[language as "fr"].droit.UPDATE, typeDroitCode: "WRITE"},
                    {code: "DELETE", libelle: labels[language as "fr"].droit.DELETE, typeDroitCode: "ADMIN"}
                ] as Droit[];
            case "typeDroit":
                return [
                    {code: "READ", libelle: labels[language as "fr"].typeDroit.READ},
                    {code: "WRITE", libelle: labels[language as "fr"].typeDroit.WRITE},
                    {code: "ADMIN", libelle: labels[language as "fr"].typeDroit.ADMIN}
                ] as TypeDroit[];
            case "typeUtilisateur":
                return [
                    {code: "ADMIN", libelle: labels[language as "fr"].typeUtilisateur.ADMIN},
                    {code: "GEST", libelle: labels[language as "fr"].typeUtilisateur.GEST},
                    {code: "CLIENT", libelle: labels[language as "fr"].typeUtilisateur.CLIENT}
                ] as TypeUtilisateur[];
            default:
                return [];
        }
    }
});
