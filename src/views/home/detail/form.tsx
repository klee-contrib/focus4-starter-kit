import {AutoForm, i18n, makeFormNode, observer, Panel, React} from "focus4";
import {makeField, patchField} from "focus4/entity";

import {DO_COMMENTAIRE, DO_LIBELLE_100} from "../../../domains";

import {loadStructure, saveStructure} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class Form extends AutoForm {

    entity = makeFormNode(mainStore.structure, entity => ({
        ...entity,
        // On change le domaine et le validateur du champ.
        denominationSociale: patchField(entity.denominationSociale, {
            domain: DO_COMMENTAIRE,
            validator: [{
                type: "string",
                options: {maxLength: 4000}
            }]
        }),
        // On ajoute un champ supplémentaire calculé.
        email: makeField(() => entity.denominationSociale.value, {
            domain: DO_LIBELLE_100,
            label: "structure.email",
            validator: [{
                type: "email"
            }]
        }, email => entity.denominationSociale.value = email) // Setter.
    }));

    init() {
        this.formInit({
            getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [+id]),
            load: loadStructure,
            save: saveStructure
        });
    }

    renderContent() {
        const {denominationSociale, capitalSocial, email, statutJuridiqueCode, adresse} = this.entity;
        return (
            <Panel title="form.title" {...this.getPanelProps()}>
                {i18n.t("form.content")}
                {this.fieldFor(denominationSociale)}
                {this.fieldFor(email)}
                {this.fieldFor(capitalSocial)}
                {this.selectFor(statutJuridiqueCode, referenceStore.statutJuridique, {labelKey: "libelle" as "libelle"})}
                {this.fieldFor(adresse.ville)}
            </Panel>
        );
    }
}
