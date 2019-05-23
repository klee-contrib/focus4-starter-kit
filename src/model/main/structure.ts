/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "@focus4/stores";
import {DO_BOOLEEN, DO_CODE_10, DO_DATE, DO_ID, DO_LIBELLE_100, DO_MONTANT} from "../../domains";
import {StatutJuridiqueCode} from "../references";
import {AdresseEntity} from "./adresse";

export type Structure = EntityToType<typeof StructureEntity>;
export type StructureNode = StoreNode<typeof StructureEntity>;

export const StructureEntity = {
    name: "structure",
    fields: {
        id: {
            type: "field",
            fieldType: "number",
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "structure.id"
        },
        denominationSociale: {
            type: "field",
            fieldType: "string",
            name: "denominationSociale",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "structure.denominationSociale"
        },
        capitalSocial: {
            type: "field",
            fieldType: "number",
            name: "capitalSocial",
            domain: DO_MONTANT,
            isRequired: false,
            label: "structure.capitalSocial"
        },
        isBeneficiaireEffectif: {
            type: "field",
            fieldType: "boolean",
            name: "isBeneficiaireEffectif",
            domain: DO_BOOLEEN,
            isRequired: true,
            label: "structure.isBeneficiaireEffectif"
        },
        dateDemande: {
            type: "field",
            fieldType: "string",
            name: "dateDemande",
            domain: DO_DATE,
            isRequired: false,
            label: "structure.dateDemande"
        },
        statutJuridiqueCode: {
            type: "field",
            fieldType: "string" as StatutJuridiqueCode,
            name: "statutJuridiqueCode",
            domain: DO_CODE_10,
            isRequired: false,
            label: "structure.statutJuridiqueCode"
        },
        adresse: {
            type: "object",
            entity: AdresseEntity
        }
    }
} as const;
