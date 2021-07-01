/* Ce fichier doit être généré automatiquement */

import {EntityToType, FieldEntry2, StoreNode} from "@focus4/stores";

import {DO_CODE_10, DO_EMAIL, DO_ID, DO_LIBELLE_100} from "../../domains";
import {CiviliteCode} from "../references";

export type Contact = EntityToType<ContactEntityType>;
export type ContactNode = StoreNode<ContactEntityType>;
export interface ContactEntityType {
    id: FieldEntry2<typeof DO_ID>;
    nom: FieldEntry2<typeof DO_LIBELLE_100>;
    prenom: FieldEntry2<typeof DO_LIBELLE_100>;
    email: FieldEntry2<typeof DO_EMAIL>;
    civiliteCode: FieldEntry2<typeof DO_CODE_10, CiviliteCode>;
}

export const ContactEntity: ContactEntityType = {
    id: {
        type: "field",
        name: "id",
        domain: DO_ID,
        isRequired: false,
        label: "contact.id"
    },
    nom: {
        type: "field",
        name: "nom",
        domain: DO_LIBELLE_100,
        isRequired: true,
        label: "contact.nom"
    },
    prenom: {
        type: "field",
        name: "prenom",
        domain: DO_LIBELLE_100,
        isRequired: true,
        label: "contact.prenom"
    },
    email: {
        type: "field",
        name: "email",
        domain: DO_EMAIL,
        isRequired: false,
        label: "contact.email"
    },
    civiliteCode: {
        type: "field",
        name: "civiliteCode",
        domain: DO_CODE_10,
        isRequired: true,
        label: "contact.civiliteCode"
    }
};
