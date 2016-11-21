/* Ce fichier doit être généré automatiquement */

import {EntityField, EntityList, StoreListNode, StoreNode} from "autofocus/entity";
import {DO_DATE, DO_ID} from "../domains";
import {Evenement, EvenementNode} from "./evenement";

export interface Suivi {
    dateCreation?: string;
    nombreEvenement?: number;
    evenementList?: Evenement[];
}

export interface SuiviNode extends StoreNode<Suivi> {
    dateCreation: EntityField<string>;
    nombreEvenement: EntityField<number>;
    evenementList: EntityList<StoreListNode<EvenementNode>>;
}

export const SuiviEntity = {
    name: "suivi",
    fields: {
        dateCreation: {
            type: "field" as "field",
            name: "dateCreation",
            domain: DO_DATE,
            isRequired: true,
            translationKey: "suivi.dateCreation"
        },
        nombreEvenement: {
            type: "field" as "field",
            name: "nombreEvenement",
            domain: DO_ID,
            isRequired: true,
            translationKey: "suivi.nombreEvenement"
        },
        evenementList: {
            type: "list" as "list",
            entityName: "evenement"
        }
    }
};
