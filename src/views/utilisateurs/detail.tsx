import {useObserver} from "mobx-react";
import {useTranslation} from "react-i18next";

import {Display, SelectRadio} from "@focus4/form-toolbox";
import {
    autocompleteFor,
    fieldFor,
    Form,
    selectFor,
    useFormActions,
    useFormNode,
    useLoad,
    useReferenceTracking
} from "@focus4/forms";
import {Panel} from "@focus4/layout";
import {makeReferenceList, toFlatValues} from "@focus4/stores";
import {FontIcon} from "@focus4/toolbox";

import {getProfils} from "../../services/securite/profil/profil";
import {addUtilisateur, getUtilisateur, updateUtilisateur} from "../../services/securite/utilisateur/utilisateur";
import {profilStore} from "../../stores/profil";
import {referenceStore} from "../../stores/references";
import {utilisateurStore} from "../../stores/utilisateur";

import {router} from "../../router";

import css from "./__style__/detail.css";

export function UtilisateurDetail({closePopin}: {closePopin?: () => void}) {
    const {t} = useTranslation();

    const entity = useFormNode(utilisateurStore.utilisateur, e =>
        (!router.state.utilisateurs.utiId ? e.edit(() => true) : e)
            .remove("id", "dateCreation", "dateModification")
            .patch("profilId", f =>
                f.metadata({
                    DisplayComponent: props => (
                        <a className={css.link} href={router.href(x => x("profils")(props.value!))}>
                            <Display {...props} />
                            <FontIcon>open_in_new</FontIcon>
                        </a>
                    )
                })
            )
            .patch("typeUtilisateurCode", f => f.metadata({SelectComponent: SelectRadio<"string">}))
    );

    const actions = useFormActions(entity, a =>
        a
            .init()
            .params(() => router.state.utilisateurs.utiId)
            .load(getUtilisateur)
            .create(addUtilisateur)
            .update(updateUtilisateur)
            .withConfirmation(router)
            .on(["create", "cancel"], () => closePopin?.())
            .on("create", (_, uti) => router.to(x => x("utilisateurs")(uti.id!)))
    );

    useLoad(profilStore.profils, a => a.params().load(getProfils).trackingId(actions.trackingId));
    useReferenceTracking(actions.trackingId, referenceStore, "typeUtilisateur");

    return useObserver(() => (
        <Form {...actions.formProps}>
            <Panel
                title={t(actions.params ? "app.user.detail.consult" : "app.user.detail.create")}
                {...actions.panelProps}
            >
                {fieldFor(entity.nom)}
                {fieldFor(entity.prenom)}
                {fieldFor(entity.email)}
                {fieldFor(entity.dateNaissance)}
                {autocompleteFor(entity.adresse, {
                    keyResolver: async label => label,
                    querySearcher: query => searchAdresse(query),
                    autocompleteProps: {icon: "place"}
                })}
                {fieldFor(entity.actif)}
                {selectFor(entity.typeUtilisateurCode, referenceStore.typeUtilisateur)}
                {selectFor(
                    entity.profilId,
                    makeReferenceList(toFlatValues(profilStore.profils), {valueKey: "id", labelKey: "libelle"})
                )}
                {!entity.form.isEdit ? fieldFor(entity.sourceNode.dateCreation) : null}
                {!entity.form.isEdit && entity.sourceNode.dateModification.value
                    ? fieldFor(entity.sourceNode.dateModification)
                    : null}
            </Panel>
        </Form>
    ));
}

async function searchAdresse(query: string): Promise<{key: string; label: string}[]> {
    const response = await fetch(`./api/adresses?query=${encodeURIComponent(query)}`);
    return await response.json();
}
