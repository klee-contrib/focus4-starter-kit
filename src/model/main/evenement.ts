/* Ce fichier doit être généré automatiquement */

import {EntityField, ClearSet} from "autofocus/entity";
import {DO_COMMENTAIRE, DO_DATE, DO_ID} from "../domains";

export interface Evenement {
    id?: number;
    date?: string;
    commentaire?: string;
}

export interface EvenementData extends ClearSet<Evenement> {
    id: EntityField<number>;
    date: EntityField<string>;
    commentaire: EntityField<string>;
}

export const EvenementEntity = {
    name: "evenement",
    fields: {
        id: {
            type: "field" as "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            translationKey: "evenement.id"
        },
        date: {
            type: "field" as "field",
            name: "date",
            domain: DO_DATE,
            isRequired: true,
            translationKey: "evenement.date"
        },
        commentaire: {
            type: "field" as "field",
            name: "commentaire",
            domain: DO_COMMENTAIRE,
            isRequired: true,
            translationKey: "evenement.commentaire"
        }
    }
};
