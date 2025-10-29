export type TypeUtilisateurCode = "ADMIN" | "CLIENT" | "GEST";
export interface TypeUtilisateur {
    code: TypeUtilisateurCode;
    libelle: string;
}
export const typeUtilisateur = {type: {} as TypeUtilisateur, valueKey: "code", labelKey: "libelle"} as const;
