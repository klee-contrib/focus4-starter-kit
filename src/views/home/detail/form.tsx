import {fieldFor, Form, i18n, makeField, makeFormActions, makeFormNode, observer, Panel, patchField, React, selectFor} from "focus4";
import {patchNodeEdit} from "focus4/entity";

import {DO_COMMENTAIRE, DO_LIBELLE_100} from "../../../domains";

import {loadStructure, saveStructure} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class BasicForm extends React.Component<{}, void> {

    entity = makeFormNode(mainStore.structure, entity => {
        // On change le domaine et le isRequired du champ.
        patchField(entity.denominationSociale, () => ({
            domain: DO_COMMENTAIRE,
            isRequired: !!entity.capitalSocial.value
        }));

        patchField(entity.capitalSocial, {}, () => entity.statutJuridiqueCode.value !== "EARL");
        patchNodeEdit(entity.adresse, false);

        // On ajoute un champ supplémentaire calculé.
        return {
            email: makeField(() => entity.denominationSociale.value, {
                domain: DO_LIBELLE_100,
                label: "structure.email",
                validator: {type: "email"}
            }, email => entity.denominationSociale.value = email) // Setter.
        };
    });

    actions = makeFormActions(this.entity, {
        getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [+id]),
        load: loadStructure,
        save: saveStructure
    });

    render() {
        const {denominationSociale, capitalSocial, email, statutJuridiqueCode, adresse} = this.entity;
        return (
            <Form {...this.actions.formProps}>
                <Panel title="form.title" {...this.actions.panelProps}>
                    {i18n.t("form.content")}
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
