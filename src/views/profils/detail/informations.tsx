import {useObserver} from "mobx-react";

import {fieldFor, Form, Panel, selectFor, useFormActions, useFormNode} from "@focus4/forms";
import {Slider} from "@focus4/toolbox";

import {addProfil, getProfil, updateProfil} from "../../../services/securite/profil/profil";
import {profilStore} from "../../../stores/profil";
import {referenceStore} from "../../../stores/references";

import {DO_ENTIER} from "../../../domains";
import {router} from "../../../router";

export function ProfilInfos() {
    const entity = useFormNode(profilStore.profil, e =>
        e.remove("id", "dateCreation", "dateModification", "utilisateurs").add("nombreUtilisateursMax", f =>
            f
                .domain(DO_ENTIER)
                .metadata({
                    label: "Nombre maximal d'utilisateurs",
                    InputComponent: Slider,
                    inputProps: {pinned: true, snaps: true, max: 20}
                })
                .value(10)
        )
    );

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
            <Panel title="Informations" {...actions.panelProps}>
                {fieldFor(entity.libelle)}
                {selectFor(entity.droits, referenceStore.droit)}
                {fieldFor(entity.nombreUtilisateursMax)}
                {!entity.form.isEdit ? fieldFor(entity.sourceNode.dateCreation) : null}
                {!entity.form.isEdit && entity.sourceNode.dateModification.value
                    ? fieldFor(entity.sourceNode.dateModification)
                    : null}
            </Panel>
        </Form>
    ));
}
