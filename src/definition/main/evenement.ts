/* Ce fichier doit être généré automatiquement */

import {EntityValue} from "autofocus/entity";
import {DO_COMMENTAIRE, DO_DATE, DO_ID} from "../domains";

export interface Evenement {
    id?: number;
    date?: string;
    commentaire?: string;
}

export interface EvenementData {
    id: EntityValue<number>;
    date: EntityValue<string>;
    commentaire: EntityValue<string>;
    set: (evenement: Evenement) => void;
    clear: () => void;
}

export const EvenementEntity = {
    name: "evenement",
    fields: {
        id: {
            type: "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            translationKey: "evenement.id"
        },
        date: {
            type: "field",
            name: "date",
            domain: DO_DATE,
            isRequired: true,
            translationKey: "evenement.date"
        },
        commentaire: {
            type: "field",
            name: "commentaire",
            domain: DO_COMMENTAIRE,
            isRequired: true,
            translationKey: "evenement.commentaire"
        }
    }
};
