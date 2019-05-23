import {
    fieldFor,
    Form,
    makeField,
    makeFormActions,
    makeFormNode,
    Panel,
    patchField,
    selectFor
} from "@focus4/components";
import {patchNodeEdit} from "@focus4/stores";
import i18next from "i18next";
import {observer} from "mobx-react";
import React from "react";

import {DO_COMMENTAIRE, DO_LIBELLE_100} from "../../../domains";
import {loadStructure, saveStructure} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class BasicForm extends React.Component {
    entity = makeFormNode(this, mainStore.structure, {}, entity => {
        // On change le domaine et le isRequired du champ.
        patchField(entity.denominationSociale, () => ({
            domain: DO_COMMENTAIRE,
            isRequired: !!entity.capitalSocial.value
        }));

        patchField(
            entity.capitalSocial,
            {validator: {type: "number", max: 20000}},
            () => entity.statutJuridiqueCode.value !== "EARL"
        );
        patchNodeEdit(entity.adresse, false);

        // On ajoute un champ supplémentaire calculé.
        return {
            email: makeField(
                () => entity.denominationSociale.value,
                {
                    domain: DO_LIBELLE_100,
                    label: "structure.email",
                    validator: {type: "email"}
                },
                email => (entity.denominationSociale.value = email)
            ) // Setter.
        };
    });

    actions = makeFormActions(this, this.entity, {
        getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [+id]),
        load: loadStructure,
        save: saveStructure
    });

    render() {
        const {denominationSociale, capitalSocial, email, statutJuridiqueCode, adresse} = this.entity;
        return (
            <Form {...this.actions.formProps}>
                <Panel title="form.title" {...this.actions.panelProps}>
                    {i18next.t("form.content")}
                    {fieldFor(denominationSociale)}
                    {fieldFor(email)}
                    {fieldFor(capitalSocial)}
                    {selectFor(statutJuridiqueCode, referenceStore.statutJuridique)}
                    {fieldFor(adresse.codePostal)}
                    {fieldFor(adresse.ville)}
                </Panel>
            </Form>
        );
    }
}
