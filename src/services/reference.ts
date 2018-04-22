/* tslint:disable */

export function loadReference(refName: string) {
    return new Promise<{}[]>(resolve => {
        setTimeout(() => {
            if (refName === "civilite") {
                resolve([{code: "M", libelle: "Monsieur"}, {code: "MME", libelle: "Madame"}]);
            } else {
                resolve([
                    {code: "ASSO", libelle: "Association"},
                    {code: "AUTO_ENTR", libelle: "Auto-entrepreneur"},
                    {code: "AUTRES", libelle: "Autres"},
                    {code: "EARL", libelle: "E.A.R.L."},
                    {code: "EIRL", libelle: "E.I.R.L."},
                    {code: "ENTR_INDIV", libelle: "Entrepreneur individuel"},
                    {code: "EURL", libelle: "E.U.R.L."},
                    {code: "GCSMS", libelle: "G.C.S.M.S."},
                    {code: "GIE", libelle: "G.I.E."},
                    {code: "GIP", libelle: "G.I.P."},
                    {code: "SA", libelle: "S.A."},
                    {code: "SARL", libelle: "S.A.R.L."},
                    {code: "SAS", libelle: "S.A.S."},
                    {code: "SASU", libelle: "S.A.S.U."},
                    {code: "SCA", libelle: "S.C.A."},
                    {code: "SCI", libelle: "S.C.I."},
                    {code: "SCM", libelle: "S.C.M."},
                    {code: "SCP", libelle: "S.C.P."},
                    {code: "SCS", libelle: "S.C.S."},
                    {code: "SELARL", libelle: "S.E.L.A.R.L."},
                    {code: "SEM", libelle: "S.E.M."},
                    {code: "SNC", libelle: "S.N.C."}
                ]);
            }
        }, 250);
    });
}
