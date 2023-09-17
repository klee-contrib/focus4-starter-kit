import {useObserver} from "mobx-react";

import {Display, fieldFor, Form, Panel, selectFor, useFormActions, useFormNode, useLoad} from "@focus4/forms";
import {makeReferenceList, toFlatValues} from "@focus4/stores";
import {FontIcon} from "@focus4/toolbox";

import {getProfils} from "../../services/securite/profil/profil";
import {addUtilisateur, getUtilisateur, updateUtilisateur} from "../../services/securite/utilisateur/utilisateur";
import {profilStore} from "../../stores/profil";
import {referenceStore} from "../../stores/references";
import {utilisateurStore} from "../../stores/utilisateur";

import {router} from "../../router";

import css from "./__style__/detail.css";

export function UtilisateurDetail() {
    const entity = useFormNode(utilisateurStore.utilisateur, e =>
        e.remove("id", "dateCreation", "dateModification").patch("profilId", f =>
            f.metadata({
                DisplayComponent: props => (
                    <a className={css.link} href={router.href(x => x("profils")(props.value))}>
                        <Display {...props} />
                        <FontIcon>open_in_new</FontIcon>
                    </a>
                )
            })
        )
    );

    useLoad(profilStore.profils, a => a.params().load(getProfils));

    const actions = useFormActions(entity, a =>
        a
            .params(() => router.state.utilisateurs.utiId)
            .load(getUtilisateur)
            .save(uti => {
                const {utiId} = router.state.utilisateurs;
                if (utiId) {
                    return updateUtilisateur(utiId, uti);
                } else {
                    return addUtilisateur(uti);
                }
            })
    );

    return useObserver(() => (
        <Form {...actions.formProps}>
            <Panel title="Informations" {...actions.panelProps}>
                {fieldFor(entity.nom)}
                {fieldFor(entity.prenom)}
                {fieldFor(entity.email)}
                {fieldFor(entity.dateNaissance)}
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