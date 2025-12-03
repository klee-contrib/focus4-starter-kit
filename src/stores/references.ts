import {makeReferenceStore} from "@focus4/stores";

import * as refsPro from "../model/securite/profil/references";
import * as refsUti from "../model/securite/utilisateur/references";
import fetch from "../services/fetch";

export const referenceStore = makeReferenceStore(name => fetch(`api/references/${name}`).json(), {
    droit: refsPro.droit,
    typeDroit: refsPro.typeDroit,
    typeUtilisateur: refsUti.typeUtilisateur
});
