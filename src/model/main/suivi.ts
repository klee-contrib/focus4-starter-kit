/* Ce fichier doit être généré automatiquement */

import {EntityToType, FieldEntry2, ListEntry, StoreNode} from "@focus4/stores";

import {DO_DATE, DO_ID} from "../../domains";

import {EvenementEntity, EvenementEntityType} from "./evenement";

export type Suivi = EntityToType<SuiviEntityType>;
export type SuiviNode = StoreNode<SuiviEntityType>;
export interface SuiviEntityType {
    dateCreation: FieldEntry2<typeof DO_DATE>;
    nombreEvenement: FieldEntry2<typeof DO_ID>;
    evenementList: ListEntry<EvenementEntityType>;
}

export const SuiviEntity: SuiviEntityType = {
    dateCreation: {
        type: "field",
        name: "dateCreation",
        domain: DO_DATE,
        isRequired: true,
        label: "suivi.dateCreation"
    },
    nombreEvenement: {
        type: "field",
        name: "nombreEvenement",
        domain: DO_ID,
        isRequired: true,
        label: "suivi.nombreEvenement"
    },
    evenementList: {
        type: "list",
        entity: EvenementEntity
    }
} as const;
