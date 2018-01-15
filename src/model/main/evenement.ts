/* Ce fichier doit être généré automatiquement */
/* tslint:disable */

import {EntityField, StoreNode} from "focus4/entity";
import {DO_COMMENTAIRE, DO_DATE, DO_ID} from "../../domains";

export interface Evenement {
    id?: number;
    date: string;
    commentaire: string;
}

export interface EvenementNode extends StoreNode<Evenement> {
    id?: EntityField<number, typeof DO_ID>;
    date: EntityField<string, typeof DO_DATE>;
    commentaire: EntityField<string, typeof DO_COMMENTAIRE>;
}

export const EvenementEntity = {
    name: "evenement",
    fields: {
        id: {
            type: "field" as "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "evenement.id"
        },
        date: {
            type: "field" as "field",
            name: "date",
            domain: DO_DATE,
            isRequired: true,
            label: "evenement.date"
        },
        commentaire: {
            type: "field" as "field",
            name: "commentaire",
            domain: DO_COMMENTAIRE,
            isRequired: true,
            label: "evenement.commentaire"
        }
    }
};
