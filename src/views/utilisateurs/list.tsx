import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import {advancedSearchFor} from "@focus4/collections";
import {messageStore} from "@focus4/core";
import {Dialog} from "@focus4/layout";

import {UtilisateurItem} from "../../model/securite/utilisateur/utilisateur-item";
import {searchUtilisateur} from "../../services/securite/utilisateur/utilisateur";
import {utilisateurListStore} from "../../stores/utilisateur";

import {UtilisateurDelete} from "./delete";
import {UtilisateurLine} from "./line";

export function UtilisateurList() {
    const {t} = useTranslation();

    const [utiDelete, setUtiDelete] = useState<UtilisateurItem>();
    const [manyDialogActive, setManyDialogActive] = useState(false);

    function load() {
        utilisateurListStore.selectedItems.clear();
        utilisateurListStore.isLoading = true;
        searchUtilisateur().then(list => {
            utilisateurListStore.list = list;
            utilisateurListStore.isLoading = false;
        });
    }

    useEffect(load, []);

    return (
        <>
            {advancedSearchFor({
                store: utilisateurListStore,
                facetBoxPosition: "none",
                hasSearchBar: true,
                hasSelection: true,
                orderableColumnList: [
                    {key: "nom", label: t("app.user.ordering.nameAsc"), order: true},
                    {key: "nom", label: t("app.user.ordering.nameDesc"), order: false},
                    {key: "prenom", label: t("app.user.ordering.surnameAsc"), order: true},
                    {key: "prenom", label: t("app.user.ordering.surnameDesc"), order: false}
                ],
                operationList: [
                    {action: () => setManyDialogActive(true), label: t("app.user.delete.action"), icon: "delete"}
                ],
                listProps: {
                    itemKey: i => i.id,
                    operationList: uti => [
                        {
                            action: () => setUtiDelete(uti),
                            icon: "delete",
                            type: "icon-tooltip",
                            label: t("app.user.delete.action")
                        }
                    ],
                    LineComponent: UtilisateurLine,
                    perPage: 10
                }
            })}
            <UtilisateurDelete closeDialog={() => setUtiDelete(undefined)} onDelete={load} utilisateur={utiDelete} />
            <Dialog
                actions={[
                    {
                        label: t("app.user.delete.confirm"),
                        color: "primary",
                        variant: "elevated-filled",
                        onClick: async () => {
                            messageStore.addWarningMessage("Méthode non implémentée...");
                            setManyDialogActive(false);
                            load();
                        }
                    },
                    {label: t("app.user.delete.cancel"), onClick: () => setManyDialogActive(false)}
                ]}
                active={manyDialogActive}
                onOverlayClick={() => setManyDialogActive(false)}
                title={t("app.user.delete.titleMany")}
            >
                {t("app.user.delete.textMany", {param: utilisateurListStore.selectedItems.size})}
                <br />
                <br />
                (La méthode n'est pas implémentée)
            </Dialog>
        </>
    );
}
