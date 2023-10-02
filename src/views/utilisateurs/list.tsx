import {useEffect, useState} from "react";

import {advancedSearchFor} from "@focus4/collections";
import {messageStore} from "@focus4/core";
import {Dialog} from "@focus4/layout";

import {UtilisateurItem} from "../../model/securite/utilisateur/utilisateur-item";
import {searchUtilisateur} from "../../services/securite/utilisateur/utilisateur";
import {utilisateurListStore} from "../../stores/utilisateur";

import {UtilisateurDelete} from "./delete";
import {UtilisateurLine} from "./line";

export function UtilisateurList() {
    const [isLoading, setLoading] = useState(false);
    const [utiDelete, setUtiDelete] = useState<UtilisateurItem>();
    const [manyDialogActive, setManyDialogActive] = useState(false);

    function load() {
        utilisateurListStore.selectedItems.clear();
        setLoading(true);
        searchUtilisateur().then(list => {
            utilisateurListStore.list = list;
            setLoading(false);
        });
    }

    useEffect(load, []);

    return (
        <>
            {advancedSearchFor({
                store: utilisateurListStore,
                facetBoxPosition: "none",
                hasSelection: true,
                orderableColumnList: [
                    {key: "nom", label: "Nom croissant", order: true},
                    {key: "nom", label: "Nom décroissant", order: false},
                    {key: "prenom", label: "Prénom croissant", order: true},
                    {key: "prenom", label: "Prénom décroissant", order: false}
                ],
                operationList: [{action: () => setManyDialogActive(true), label: "Supprimer", icon: "delete"}],
                listProps: {
                    itemKey: i => i.id,
                    operationList: uti => [
                        {action: () => setUtiDelete(uti), icon: "delete", type: "icon-tooltip", label: "Supprimer"}
                    ],
                    isLoading,
                    LineComponent: UtilisateurLine,
                    perPage: 10
                }
            })}
            <UtilisateurDelete closeDialog={() => setUtiDelete(undefined)} onDelete={load} utilisateur={utiDelete} />
            <Dialog
                actions={[
                    {
                        label: "Confirmer",
                        color: "primary",
                        variant: "elevated-filled",
                        onClick: async () => {
                            messageStore.addWarningMessage("Méthode non implémentée...");
                            setManyDialogActive(false);
                            load();
                        }
                    },
                    {label: "Annuler", onClick: () => setManyDialogActive(false)}
                ]}
                active={manyDialogActive}
                onOverlayClick={() => setManyDialogActive(false)}
                title="Suppression de plusieurs utilisateurs"
            >
                Êtes vous sûr de vouloir supprimer ces {utilisateurListStore.selectedItems.size} utilisateurs ?
                <br />
                <br />
                (La méthode n'est pas implémentée)
            </Dialog>
        </>
    );
}
