/* Ce fichier doit être généré automatiquement */
/* tslint:disable */

import {EntityField, StoreNode} from "focus4/entity";
import {DO_BOOLEEN, DO_CODE_10, DO_DATE, DO_ID, DO_LIBELLE_100, DO_MONTANT} from "../../domains";
import {StatutJuridiqueCode} from "../references";
import {Adresse, AdresseNode} from "./adresse";

export interface Structure {
    id: number;
    denominationSociale: string;
    capitalSocial?: number;
    isBeneficiaireEffectif: boolean;
    dateDemande?: string;
    statutJuridiqueCode?: StatutJuridiqueCode;
    adresse?: Adresse;
}

export interface StructureNode extends StoreNode<Structure> {
    id: EntityField<number, typeof DO_ID>;
    denominationSociale: EntityField<string, typeof DO_LIBELLE_100>;
    capitalSocial: EntityField<number, typeof DO_MONTANT>;
    isBeneficiaireEffectif: EntityField<boolean, typeof DO_BOOLEEN>;
    dateDemande: EntityField<string, typeof DO_DATE>;
    statutJuridiqueCode: EntityField<StatutJuridiqueCode, typeof DO_CODE_10>;
    adresse: AdresseNode;
}

export const StructureEntity = {
    name: "structure",
    fields: {
        id: {
            type: "field" as "field",
            name: "id",
            domain: DO_ID,
            isRequired: true,
            label: "structure.id"
        },
        denominationSociale: {
            type: "field" as "field",
            name: "denominationSociale",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "structure.denominationSociale"
        },
        capitalSocial: {
            type: "field" as "field",
            name: "capitalSocial",
            domain: DO_MONTANT,
            isRequired: false,
            label: "structure.capitalSocial"
        },
        isBeneficiaireEffectif: {
            type: "field" as "field",
            name: "isBeneficiaireEffectif",
            domain: DO_BOOLEEN,
            isRequired: true,
            label: "structure.isBeneficiaireEffectif"
        },
        dateDemande: {
            type: "field" as "field",
            name: "dateDemande",
            domain: DO_DATE,
            isRequired: false,
            label: "structure.dateDemande"
        },
        statutJuridiqueCode: {
            type: "field" as "field",
            name: "statutJuridiqueCode",
            domain: DO_CODE_10,
            isRequired: false,
            label: "structure.statutJuridiqueCode"
        },
        adresse: {
            type: "object" as "object",
            entityName: "adresse",
        }
    }
};
