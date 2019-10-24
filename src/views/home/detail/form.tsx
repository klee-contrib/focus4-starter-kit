import {fieldFor, Form, Panel, selectFor, useFormActions, useFormNode} from "@focus4/forms";
import i18next from "i18next";
import {useObserver} from "mobx-react-lite";
import * as React from "react";

import {DO_COMMENTAIRE, DO_LIBELLE_100} from "../../../domains";
import {loadStructure, saveStructure} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

export function BasicForm() {
    const entity = useFormNode(mainStore.structure, c =>
        c
            // On change le domaine et le isRequired du champ.
            .patch("denominationSociale", (f, node) =>
                f.metadata(() => ({
                    domain: DO_COMMENTAIRE,
                    isRequired: !!node.capitalSocial.value
                }))
            )
            .patch("capitalSocial", (f, node) =>
                f
                    .value(() => (node.denominationSociale.value && node.denominationSociale.value.length) || 0)
                    .metadata({validator: {type: "number", max: 20000}})
                    .edit(() => node.statutJuridiqueCode.value !== "EARL")
            )
            .patch("adresse", s => s.edit(false))

            // On ajoute un champ supplémentaire calculé.
            .add("email", (f, node) =>
                f
                    .value(() => node.denominationSociale.value, value => (node.denominationSociale.value = value))
                    .metadata({
                        domain: DO_LIBELLE_100,
                        label: "structure.email",
                        validator: {type: "email"}
                    })
            )
    );
    const actions = useFormActions(entity, a =>
        a
            .params(() => homeViewStore.withView(({page, id}) => !page && id && +id))
            .load(loadStructure)
            .save(saveStructure)
    );

    const {denominationSociale, capitalSocial, email, statutJuridiqueCode, adresse} = entity;
    return useObserver(() => (
        <Form {...actions.formProps}>
            <Panel title="form.title" {...actions.panelProps}>
                {i18next.t("form.content")}
                {fieldFor(denominationSociale)}
                {fieldFor(email)}
                {fieldFor(capitalSocial)}
                {selectFor(statutJuridiqueCode, referenceStore.statutJuridique)}
                {fieldFor(adresse.codePostal)}
                {fieldFor(adresse.ville)}
            </Panel>
        </Form>
    ));
}
