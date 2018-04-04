/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "focus4/entity";
import {DO_COMMENTAIRE, DO_DATE, DO_ID} from "../../domains";

export type Evenement = EntityToType<typeof EvenementEntity>;
export type EvenementNode = StoreNode<typeof EvenementEntity>;

export const EvenementEntity = {
    name: "evenement",
    fields: {
        id: {
            type: "field" as "field",
            fieldType: 0,
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "evenement.id"
        },
        date: {
            type: "field" as "field",
            fieldType: "",
            name: "date",
            domain: DO_DATE,
            isRequired: true,
            label: "evenement.date"
        },
        commentaire: {
            type: "field" as "field",
            fieldType: "",
            name: "commentaire",
            domain: DO_COMMENTAIRE,
            isRequired: true,
            label: "evenement.commentaire"
        }
    }
};
