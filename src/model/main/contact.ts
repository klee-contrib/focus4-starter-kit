/* Ce fichier doit être généré automatiquement */

import {EntityField, ClearSet} from "autofocus/entity";
import {DO_CODE_10, DO_EMAIL, DO_ID, DO_LIBELLE_100, DO_TELEPHONE} from "../domains";
import {CiviliteCode} from "../references";

export interface Contact {
    id?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    civiliteCode?: CiviliteCode;
}

export interface ContactData extends ClearSet<Contact> {
    id: EntityField<number>;
    nom: EntityField<string>;
    prenom: EntityField<string>;
    email: EntityField<string>;
    civiliteCode: EntityField<CiviliteCode>;
}

export const ContactEntity = {
    name: "contact",
    fields: {
        id: {
            type: "field" as "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            translationKey: "contact.id"
        },
        nom: {
            type: "field" as "field",
            name: "nom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "contact.nom"
        },
        prenom: {
            type: "field" as "field",
            name: "prenom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "contact.prenom"
        },
        email: {
            type: "field" as "field",
            name: "email",
            domain: DO_EMAIL,
            isRequired: false,
            translationKey: "contact.email"
        },
        civiliteCode: {
            type: "field" as "field",
            name: "civiliteCode",
            domain: DO_CODE_10,
            isRequired: true,
            translationKey: "contact.civiliteCode"
        }
    }
};
