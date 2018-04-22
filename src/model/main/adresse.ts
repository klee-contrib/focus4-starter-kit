/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "focus4/entity";
import {DO_CODE_10, DO_ID, DO_LIBELLE_100} from "../../domains";

export type Adresse = EntityToType<typeof AdresseEntity>;
export type AdresseNode = StoreNode<typeof AdresseEntity>;

export const AdresseEntity = {
    name: "adresse",
    fields: {
        id: {
            type: "field" as "field",
            fieldType: 0,
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "adresse.id"
        },
        ligne1: {
            type: "field" as "field",
            fieldType: "",
            name: "ligne1",
            domain: DO_LIBELLE_100,
            isRequired: false,
            label: "adresse.ligne1"
        },
        ligne2: {
            type: "field" as "field",
            fieldType: "",
            name: "ligne2",
            domain: DO_LIBELLE_100,
            isRequired: false,
            label: "adresse.ligne2"
        },
        codePostal: {
            type: "field" as "field",
            fieldType: "",
            name: "codePostal",
            domain: DO_CODE_10,
            isRequired: true,
            label: "adresse.codePostal"
        },
        ville: {
            type: "field" as "field",
            fieldType: "",
            name: "ville",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "adresse.ville"
        }
    }
};
