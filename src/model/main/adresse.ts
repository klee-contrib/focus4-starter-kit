/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "focus4/entity";
import {DO_CODE_10, DO_ID, DO_LIBELLE_100} from "../../domains";

export type Adresse = EntityToType<typeof AdresseEntity>;
export type AdresseNode = StoreNode<typeof AdresseEntity>;

export const AdresseEntity = {
    name: "adresse",
    fields: {
        id: {
            type: "field",
            fieldType: "number",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "adresse.id"
        },
        ligne1: {
            type: "field",
            fieldType: "string",
            name: "ligne1",
            domain: DO_LIBELLE_100,
            isRequired: false,
            label: "adresse.ligne1"
        },
        ligne2: {
            type: "field",
            fieldType: "string",
            name: "ligne2",
            domain: DO_LIBELLE_100,
            isRequired: false,
            label: "adresse.ligne2"
        },
        codePostal: {
            type: "field",
            fieldType: "string",
            name: "codePostal",
            domain: DO_CODE_10,
            isRequired: true,
            label: "adresse.codePostal"
        },
        ville: {
            type: "field",
            fieldType: "string",
            name: "ville",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "adresse.ville"
        }
    }
} as const;
