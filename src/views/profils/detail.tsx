import {useObserver} from "mobx-react";

import {fieldFor, Form, Panel, selectFor, useFormActions, useFormNode} from "@focus4/forms";

import {addProfil, getProfil, updateProfil} from "../../services/securite/profil/profil";
import {profilStore} from "../../stores/profil";
import {referenceStore} from "../../stores/references";

import {router} from "../../router";

export function ProfilDetail() {
    const entity = useFormNode(profilStore.profil, f => f.remove("dateCreation", "dateModification", "utilisateurs"));

    const actions = useFormActions(entity, a =>
        a
            .params(() => router.state.profils.proId)
            .load(getProfil)
            .save(pro => {
                const {proId} = router.state.profils;
                if (proId) {
                    return updateProfil(proId, pro);
                } else {
                    return addProfil(pro);
                }
            })
    );

    return useObserver(() => (
        <Form {...actions.formProps}>
            <Panel title="Informations générales" {...actions.panelProps}>
                {fieldFor(entity.libelle)}
                {selectFor(entity.droits, referenceStore.droit)}
                {!entity.form.isEdit ? fieldFor(entity.sourceNode.dateCreation) : null}
                {!entity.form.isEdit && entity.sourceNode.dateModification.value
                    ? fieldFor(entity.sourceNode.dateModification)
                    : null}
            </Panel>
        </Form>
    ));
}
