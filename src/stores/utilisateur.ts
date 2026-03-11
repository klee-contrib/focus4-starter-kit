import {makeLocalCollectionStore, makeStoreNode} from "@focus4/stores";

import {UtilisateurItem} from "../model/securite/utilisateur/utilisateur-item";
import {UtilisateurReadEntity} from "../model/securite/utilisateur/utilisateur-read";

export const utilisateurListStore = makeLocalCollectionStore<UtilisateurItem>({
    searchFields: ["nom", "prenom", "email"]
});

export const utilisateurStore = makeStoreNode({
    utilisateur: UtilisateurReadEntity
});
