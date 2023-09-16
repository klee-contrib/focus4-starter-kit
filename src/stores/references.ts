import {coreFetch} from "@focus4/core";
import {makeReferenceStore} from "@focus4/stores";

import * as refsPro from "../model/securite/profil/references";
import * as refsUti from "../model/securite/utilisateur/references";

export const referenceStore = makeReferenceStore(name => coreFetch("GET", `api/references/${name}`), {
    droit: refsPro.droit,
    typeDroit: refsPro.typeDroit,
    typeUtilisateur: refsUti.typeUtilisateur
});
