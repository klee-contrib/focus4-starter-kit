/* Ce fichier doit être généré automatiquement */

import {EntityToType, FieldEntry2, ObjectEntry, StoreNode} from "@focus4/stores";

import {DO_BOOLEEN, DO_CODE_10, DO_DATE, DO_ID, DO_LIBELLE_100, DO_MONTANT} from "../../domains";
import {StatutJuridiqueCode} from "../references";

import {AdresseEntity, AdresseEntityType} from "./adresse";

export type Structure = EntityToType<StructureEntityType>;
export type StructureNode = StoreNode<StructureEntityType>;
export interface StructureEntityType {
    id: FieldEntry2<typeof DO_ID>;
    denominationSociale: FieldEntry2<typeof DO_LIBELLE_100>;
    capitalSocial: FieldEntry2<typeof DO_MONTANT>;
    isBeneficiaireEffectif: FieldEntry2<typeof DO_BOOLEEN>;
    dateDemande: FieldEntry2<typeof DO_DATE>;
    statutJuridiqueCode: FieldEntry2<typeof DO_CODE_10, StatutJuridiqueCode>;
    adresse: ObjectEntry<AdresseEntityType>;
}

export const StructureEntity: StructureEntityType = {
    id: {
        type: "field",
        name: "id",
        domain: DO_ID,
        isRequired: false,
        label: "structure.id"
    },
    denominationSociale: {
        type: "field",
        name: "denominationSociale",
        domain: DO_LIBELLE_100,
        isRequired: true,
        label: "structure.denominationSociale"
    },
    capitalSocial: {
        type: "field",
        name: "capitalSocial",
        domain: DO_MONTANT,
        isRequired: false,
        label: "structure.capitalSocial"
    },
    isBeneficiaireEffectif: {
        type: "field",
        name: "isBeneficiaireEffectif",
        domain: DO_BOOLEEN,
        isRequired: true,
        label: "structure.isBeneficiaireEffectif"
    },
    dateDemande: {
        type: "field",
        name: "dateDemande",
        domain: DO_DATE,
        isRequired: false,
        label: "structure.dateDemande"
    },
    statutJuridiqueCode: {
        type: "field",
        name: "statutJuridiqueCode",
        domain: DO_CODE_10,
        isRequired: false,
        label: "structure.statutJuridiqueCode"
    },
    adresse: {
        type: "object",
        entity: AdresseEntity
    }
};
