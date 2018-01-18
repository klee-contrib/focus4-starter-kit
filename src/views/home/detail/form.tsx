import {autobind, AutoForm, fieldFor, i18n, makeFormNode, observer, Panel, React, selectFor} from "focus4";
import {makeField, patchField} from "focus4/entity";

import {DO_COMMENTAIRE, DO_LIBELLE_100} from "../../../domains";

import {loadStructure, saveStructure} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@autobind
@observer
export class Form extends AutoForm {

    entity = makeFormNode(mainStore.structure, entity => {
        // On change le domaine et le isRequired du champ.
        patchField(entity.denominationSociale, () => ({
            domain: DO_COMMENTAIRE,
            isRequired: !!entity.capitalSocial.value
        }));

        patchField(entity.capitalSocial, () => ({isEdit: entity.statutJuridiqueCode.value !== "EARL"}));

        // On ajoute un champ supplémentaire calculé.
        return {
            email: makeField(() => entity.denominationSociale.value, {
                domain: DO_LIBELLE_100,
                label: "structure.email",
                validator: [{
                    type: "email"
                }]
            }, email => entity.denominationSociale.value = email) // Setter.
        };
    });

    init() {
        this.formInit({
            getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [+id]),
            load: loadStructure,
            save: saveStructure
        });
        this.entity.adresse.form!.isEdit = false;
    }

    renderContent() {
        const {denominationSociale, capitalSocial, email, statutJuridiqueCode, adresse} = this.entity;
        return (
            <Panel title="form.title" {...this.getPanelProps()}>
                {i18n.t("form.content")}
                {fieldFor(denominationSociale)}
                {fieldFor(email)}
                {fieldFor(capitalSocial)}
                {selectFor(statutJuridiqueCode, referenceStore.statutJuridique, {labelKey: "libelle" as "libelle"})}
                {fieldFor(adresse.ville)}
            </Panel>
        );
    }
}
