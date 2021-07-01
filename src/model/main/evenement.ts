/* Ce fichier doit être généré automatiquement */

import {EntityToType, FieldEntry2, StoreNode} from "@focus4/stores";

import {DO_COMMENTAIRE, DO_DATE, DO_ID} from "../../domains";

export type Evenement = EntityToType<EvenementEntityType>;
export type EvenementNode = StoreNode<EvenementEntityType>;
export interface EvenementEntityType {
    id: FieldEntry2<typeof DO_ID>;
    date: FieldEntry2<typeof DO_DATE>;
    commentaire: FieldEntry2<typeof DO_COMMENTAIRE>;
}

export const EvenementEntity = {
    id: {
        type: "field",
        name: "id",
        domain: DO_ID,
        isRequired: false,
        label: "evenement.id"
    },
    date: {
        type: "field",
        name: "date",
        domain: DO_DATE,
        isRequired: true,
        label: "evenement.date"
    },
    commentaire: {
        type: "field",
        name: "commentaire",
        domain: DO_COMMENTAIRE,
        isRequired: true,
        label: "evenement.commentaire"
    }
} as const;
