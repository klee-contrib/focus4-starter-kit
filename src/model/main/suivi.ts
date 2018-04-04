/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "focus4/entity";
import {DO_DATE, DO_ID} from "../../domains";
import {EvenementEntity} from "./evenement";

export type Suivi = EntityToType<typeof SuiviEntity>;
export type SuiviNode = StoreNode<typeof SuiviEntity>;

export const SuiviEntity = {
    name: "suivi",
    fields: {
        dateCreation: {
            type: "field" as "field",
            fieldType: "",
            name: "dateCreation",
            domain: DO_DATE,
            isRequired: true,
            label: "suivi.dateCreation"
        },
        nombreEvenement: {
            type: "field" as "field",
            fieldType: 0,
            name: "nombreEvenement",
            domain: DO_ID,
            isRequired: true,
            label: "suivi.nombreEvenement"
        },
        evenementList: {
            type: "list" as "list",
            entity: EvenementEntity
        }
    }
};
