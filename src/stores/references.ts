import {makeReferenceStore} from "@focus4/stores";

import * as refsPro from "../model/securite/profil/references";
import * as refsUti from "../model/securite/utilisateur/references";
import {getReferenceList} from "../services/references";

export const referenceStore = makeReferenceStore(getReferenceList, {
    droit: refsPro.droit,
    typeDroit: refsPro.typeDroit,
    typeUtilisateur: refsUti.typeUtilisateur
});
