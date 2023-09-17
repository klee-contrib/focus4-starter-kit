import {CollectionStore, makeEntityStore} from "@focus4/stores";

import {UtilisateurItem} from "../model/securite/utilisateur/utilisateur-item";
import {UtilisateurReadEntity} from "../model/securite/utilisateur/utilisateur-read";

export const utilisateurListStore = new CollectionStore<UtilisateurItem>();

export const utilisateurStore = makeEntityStore({
    utilisateur: UtilisateurReadEntity
});
