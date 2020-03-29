/* Ce fichier doit être généré automatiquement */

import {EntityToType, FieldEntry2, StoreNode} from "@focus4/stores";
import {DO_CODE_10, DO_ID, DO_LIBELLE_100} from "../../domains";

export type Adresse = EntityToType<AdresseEntityType>;
export type AdresseNode = StoreNode<AdresseEntityType>;
export interface AdresseEntityType {
    id: FieldEntry2<typeof DO_ID>;
    ligne1: FieldEntry2<typeof DO_LIBELLE_100>;
    ligne2: FieldEntry2<typeof DO_LIBELLE_100>;
    codePostal: FieldEntry2<typeof DO_CODE_10>;
    ville: FieldEntry2<typeof DO_LIBELLE_100>;
}

export const AdresseEntity: AdresseEntityType = {
    id: {
        type: "field",
        name: "id",
        domain: DO_ID,
        isRequired: false,
        label: "adresse.id"
    },
    ligne1: {
        type: "field",
        name: "ligne1",
        domain: DO_LIBELLE_100,
        isRequired: false,
        label: "adresse.ligne1"
    },
    ligne2: {
        type: "field",
        name: "ligne2",
        domain: DO_LIBELLE_100,
        isRequired: false,
        label: "adresse.ligne2"
    },
    codePostal: {
        type: "field",
        name: "codePostal",
        domain: DO_CODE_10,
        isRequired: true,
        label: "adresse.codePostal"
    },
    ville: {
        type: "field",
        name: "ville",
        domain: DO_LIBELLE_100,
        isRequired: true,
        label: "adresse.ville"
    }
};
