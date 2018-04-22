/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "focus4/entity";
import {DO_BOOLEEN, DO_CODE_10, DO_DATE, DO_ID, DO_LIBELLE_100, DO_MONTANT} from "../../domains";
import {StatutJuridiqueCode} from "../references";
import {AdresseEntity} from "./adresse";

export type Structure = EntityToType<typeof StructureEntity>;
export type StructureNode = StoreNode<typeof StructureEntity>;

export const StructureEntity = {
    name: "structure",
    fields: {
        id: {
            type: "field" as "field",
            fieldType: 0,
            name: "id",
            domain: DO_ID,
            isRequired: false,
            label: "structure.id"
        },
        denominationSociale: {
            type: "field" as "field",
            fieldType: "",
            name: "denominationSociale",
            domain: DO_LIBELLE_100,
            isRequired: true,
            label: "structure.denominationSociale"
        },
        capitalSocial: {
            type: "field" as "field",
            fieldType: 0,
            name: "capitalSocial",
            domain: DO_MONTANT,
            isRequired: false,
            label: "structure.capitalSocial"
        },
        isBeneficiaireEffectif: {
            type: "field" as "field",
            fieldType: false,
            name: "isBeneficiaireEffectif",
            domain: DO_BOOLEEN,
            isRequired: true,
            label: "structure.isBeneficiaireEffectif"
        },
        dateDemande: {
            type: "field" as "field",
            fieldType: "",
            name: "dateDemande",
            domain: DO_DATE,
            isRequired: false,
            label: "structure.dateDemande"
        },
        statutJuridiqueCode: {
            type: "field" as "field",
            fieldType: "" as StatutJuridiqueCode,
            name: "statutJuridiqueCode",
            domain: DO_CODE_10,
            isRequired: false,
            label: "structure.statutJuridiqueCode"
        },
        adresse: {
            type: "object" as "object",
            entity: AdresseEntity
        }
    }
};
