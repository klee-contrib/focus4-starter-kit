/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "@focus4/stores";
import {DO_COMMENTAIRE, DO_DATE, DO_ID} from "../../domains";

export type Evenement = EntityToType<typeof EvenementEntity>;
export type EvenementNode = StoreNode<typeof EvenementEntity>;

export const EvenementEntity = {
    id: {
        type: "field",
        fieldType: "number",
        name: "id",
        domain: DO_ID,
        isRequired: false,
        label: "evenement.id"
    },
    date: {
        type: "field",
        fieldType: "string",
        name: "date",
        domain: DO_DATE,
        isRequired: true,
        label: "evenement.date"
    },
    commentaire: {
        type: "field",
        fieldType: "string",
        name: "commentaire",
        domain: DO_COMMENTAIRE,
        isRequired: true,
        label: "evenement.commentaire"
    }
} as const;
