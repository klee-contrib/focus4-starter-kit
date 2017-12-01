/* Ce fichier doit être généré automatiquement */
/* tslint:disable */

import {EntityField, StoreNode} from "focus4/entity";
import {DO_CODE_10, DO_EMAIL, DO_ID, DO_LIBELLE_100} from "../../domains";
import {CiviliteCode} from "../references";

export interface Contact {
    id: number;
    nom: string;
    prenom: string;
    email?: string;
    civiliteCode: CiviliteCode;
}

export interface ContactNode extends StoreNode<Contact> {
    id: EntityField<number, typeof DO_ID>;
    nom: EntityField<string, typeof DO_LIBELLE_100>;
    prenom: EntityField<string, typeof DO_LIBELLE_100>;
    email: EntityField<string, typeof DO_EMAIL>;
    civiliteCode: EntityField<CiviliteCode, typeof DO_CODE_10>;
}

export const ContactEntity = {
    name: "contact",
    fields: {
        id: {
            type: "field" as "field",
            name: "id",
            domain: DO_ID,
            isRequired: true,
            label: "contact.id"
        },
        nom: {
            type: "field" as "field",
            name: "nom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "contact.nom"
        },
        prenom: {
            type: "field" as "field",
            name: "prenom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "contact.prenom"
        },
        email: {
            type: "field" as "field",
            name: "email",
            domain: DO_EMAIL,
            isRequired: false,
            label: "contact.email"
        },
        civiliteCode: {
            type: "field" as "field",
            name: "civiliteCode",
            domain: DO_CODE_10,
            isRequired: true,
            label: "contact.civiliteCode"
        }
    }
};
