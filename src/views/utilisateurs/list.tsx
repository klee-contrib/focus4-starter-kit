import {useEffect, useState} from "react";

import {advancedSearchFor} from "@focus4/collections";

import {searchUtilisateur} from "../../services/securite/utilisateur/utilisateur";
import {utilisateurListStore} from "../../stores/utilisateur";

import {UtilisateurLine} from "./line";

export function UtilisateurList() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        utilisateurListStore.selectedItems.clear();
        setLoading(true);
        searchUtilisateur().then(list => {
            utilisateurListStore.list = list;
            setLoading(false);
        });
    }, []);

    return advancedSearchFor({
        store: utilisateurListStore,
        facetBoxPosition: "none",
        hasSelection: true,
        listProps: {itemKey: i => i.id, isLoading, LineComponent: UtilisateurLine, perPage: 10}
    });
}
