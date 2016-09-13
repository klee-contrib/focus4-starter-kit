/* Ce fichier doit être généré automatiquement */

import {EntityValue, EntityArray} from "autofocus/entity";
import {DO_DATE, DO_ID} from "../domains";
import {Evenement, EvenementData} from "./evenement";

export interface Suivi {
    dateCreation?: string;
    nombreEvenement?: number;
    evenementList?: Evenement[];
}

export interface SuiviData {
    dateCreation: EntityValue<string>;
    nombreEvenement: EntityValue<number>;
    evenementList: EntityArray<EvenementData>;
    set: (suivi: Suivi) => void;
    clear: () => void;
}

export const SuiviEntity = {
    name: "suivi",
    fields: {
        dateCreation: {
            type: "field",
            name: "dateCreation",
            domain: DO_DATE,
            isRequired: true,
            translationKey: "suivi.dateCreation"
        },
        nombreEvenement: {
            type: "field",
            name: "nombreEvenement",
            domain: DO_ID,
            isRequired: true,
            translationKey: "suivi.nombreEvenement"
        },
        evenementList: {
            type: "list",
            entityName: "evenement"
        }
    }
};
