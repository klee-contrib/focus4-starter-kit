/* Ce fichier doit être généré automatiquement */

export type CiviliteCode = "MME" | "M";
export interface Civilite {
    code: CiviliteCode;
    libelle: string;
}
export const civilite = {valueKey: "code", labelKey: "libelle", type: {} as Civilite};

export type StatutJuridiqueCode = "ASSO" | "AUTO_ENTR" | "AUTRES" | "EARL" | "EIRL" | "ENTR_INDIV" | "EURL" | "GCSMS" | "GIE" | "GIP" | "SA" | "SARL" | "SAS" | "SASU" | "SCA" | "SCI" | "SCM" | "SCP" | "SCS" | "SELARL" | "SEM" | "SNC";
export interface StatutJuridique {
    code: StatutJuridiqueCode;
    libelle: string;
}
export const statutJuridique = {valueKey: "code", labelKey: "libelle", type: {} as StatutJuridique};
