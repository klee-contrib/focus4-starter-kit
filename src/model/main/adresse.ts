/* Ce fichier doit être généré automatiquement */
/* tslint:disable */

import {EntityField, StoreNode} from "autofocus/entity";
import {DO_LIBELLE_100, DO_CODE_10, DO_ID} from "../domains";

export interface Adresse {
    id?: number;
    ligne1?: string;
    ligne2?: string;
    codePostal?: string;
    ville?: string;
}

export interface AdresseNode extends StoreNode<Adresse> {
    id: EntityField<number>;
    ligne1: EntityField<string>;
    ligne2: EntityField<string>;
    codePostal: EntityField<string>;
    ville: EntityField<string>;
}

export const AdresseEntity = {
    name: "adresse",
    fields: {
        id: {
            type: "field" as "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            translationKey: "adresse.id"
        },
        ligne1: {
            type: "field" as "field",
            name: "ligne1",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "adresse.ligne1"
        },
        ligne2: {
            type: "field" as "field",
            name: "ligne2",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "adresse.ligne2"
        },
        codePostal: {
            type: "field" as "field",
            name: "codePostal",
            domain: DO_CODE_10,
            isRequired: true,
            translationKey: "adresse.codePostal"
        },
        ville: {
            type: "field" as "field",
            name: "ville",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "adresse.ville"
        },
    }
};
