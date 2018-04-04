/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "focus4/entity";
import {DO_CODE_10, DO_EMAIL, DO_ID, DO_LIBELLE_100} from "../../domains";
import {CiviliteCode} from "../references";

export type Contact = EntityToType<typeof ContactEntity>;
export type ContactNode = StoreNode<typeof ContactEntity>;

export const ContactEntity = {
    name: "contact",
    fields: {
        id: {
            type: "field" as "field",
            fieldType: 0,
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "contact.id"
        },
        nom: {
            type: "field" as "field",
            fieldType: "",
            name: "nom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "contact.nom"
        },
        prenom: {
            type: "field" as "field",
            fieldType: "",
            name: "prenom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "contact.prenom"
        },
        email: {
            type: "field" as "field",
            fieldType: "",
            name: "email",
            domain: DO_EMAIL,
            isRequired: false,
            label: "contact.email"
        },
        civiliteCode: {
            type: "field" as "field",
            fieldType: "" as CiviliteCode,
            name: "civiliteCode",
            domain: DO_CODE_10,
            isRequired: true,
            label: "contact.civiliteCode"
        }
    }
};
