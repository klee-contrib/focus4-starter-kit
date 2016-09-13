/* Ce fichier doit être généré automatiquement */

import {EntityField} from "autofocus/entity";
import {DO_BOOLEEN, DO_CODE_10, DO_DATE, DO_ID, DO_LIBELLE_100, DO_MONTANT} from "../domains";
import {StatutJuridiqueCode} from "../references";
import {Adresse, AdresseData} from "./adresse";

export interface Structure {
    id?: number;
    denominationSociale?: string;
    capitalSocial?: number;
    isBeneficiaireEffectif?: boolean;
    dateDemande?: string;
    statutJuridiqueCode?: StatutJuridiqueCode;
    adresse?: Adresse;
}

export interface StructureData {
    id: EntityField<number>;
    denominationSociale: EntityField<string>;
    capitalSocial: EntityField<number>;
    isBeneficiaireEffectif: EntityField<boolean>;
    dateDemande: EntityField<string>;
    statutJuridiqueCode: EntityField<StatutJuridiqueCode>;
    adresse: EntityField<AdresseData>;
    set: (structure: Structure) => void;
    clear: () => void;
}

export const StructureEntity = {
    name: "structure",
    fields: {
        id: {
            type: "field",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            translationKey: "structure.id"
        },
        denominationSociale: {
            type: "field",
            name: "denominationSociale",
            domain: DO_LIBELLE_100,
            isRequired: true,
            translationKey: "structure.denominationSociale"
        },
        capitalSocial: {
            type: "field",
            name: "capitalSocial",
            domain: DO_MONTANT,
            isRequired: false,
            translationKey: "structure.capitalSocial"
        },
        isBeneficiaireEffectif: {
            type: "field",
            name: "isBeneficiaireEffectif",
            domain: DO_BOOLEEN,
            isRequired: true,
            translationKey: "structure.isBeneficiaireEffectif"
        },
        dateDemande: {
            type: "field",
            name: "dateDemande",
            domain: DO_DATE,
            isRequired: false,
            translationKey: "structure.dateDemande"
        },
        statutJuridiqueCode: {
            type: "field",
            name: "statutJuridiqueCode",
            domain: DO_CODE_10,
            isRequired: false,
            translationKey: "structure.statutJuridiqueCode"
        },
        adresse: {
            type: "field",
            entityName: "adresse",
            name: "adresse",
            isRequired: false,
            translationKey: "structure.adresse"
        }
    }
};
