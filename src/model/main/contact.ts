/* Ce fichier doit être généré automatiquement */

import {EntityField} from "autofocus/entity";
import {DO_CODE_10, DO_EMAIL, DO_ID, DO_LIBELLE_100, DO_TELEPHONE} from "../domains";
import {CiviliteCode} from "../references";

export interface Contact {
    id?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    telephone?: string;
    civiliteCode?: CiviliteCode;
}

export interface ContactData {
    id: EntityField<number>;
    nom: EntityField<string>;
    prenom: EntityField<string>;
    email: EntityField<string>;
    telephone: EntityField<string>;
    civiliteCode: EntityField<CiviliteCode>;
    set: (contact: Contact) => void;
    clear: () => void;
}

export const ContactEntity = {
    name: "contact",
    fields: {
        id: {
            type: "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            translationKey: "contact.id"
        },
        nom: {
            type: "field",
            name: "nom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "contact.nom"
        },
        prenom: {
            type: "field",
            name: "prenom",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "contact.prenom"
        },
        email: {
            type: "field",
            name: "email",
            domain: DO_EMAIL,
            isRequired: false,
            translationKey: "contact.email"
        },
        telephone: {
            type: "field",
            name: "telephone",
            domain: DO_TELEPHONE,
            isRequired: false,
            translationKey: "contact.telephone"
        },
        civiliteCode: {
            type: "field",
            name: "civiliteCode",
            domain: DO_CODE_10,
            isRequired: true,
            translationKey: "contact.civiliteCode"
        }
    }
};
