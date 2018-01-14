import {AutoForm, listFor, makeFormNode, observer, Panel, React} from "focus4";
import {makeField, patchField} from "focus4/entity";

import {loadContactList} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class FormList extends AutoForm {

    entity = makeFormNode(mainStore.contactList, entity => {
        patchField(entity.nom, {isRequired: false});
        patchField(entity.prenom, () => ({isRequired: !!entity.nom.value}));
        return {
            nomPrenom: makeField(() => `${entity.nom.value || ""} ${entity.prenom.value || ""}`, {
                label: "contact.nomPrenom"
            })
        };
    });

    init() {
        this.formInit({
            getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [id]),
            load: loadContactList,
            save: async x => x
        });
    }

    renderContent() {
        return (
            <Panel title="Formulaire liste" {...this.getPanelProps()}>
                {listFor({
                    data: this.entity,
                    perPage: 2,
                    isManualFetch: true,
                    LineComponent: observer(({data}) => (
                        <div>
                            <h6>{data.nomPrenom.value}</h6>
                            {this.fieldFor(data.nom)}
                            {this.fieldFor(data.prenom)}
                            {this.fieldFor(data.email)}
                            {this.selectFor(data.civiliteCode, referenceStore.civilite, {labelKey: "libelle" as "libelle"})}
                        </div>
                    ))
                })}
            </Panel>
        );
    }
}
