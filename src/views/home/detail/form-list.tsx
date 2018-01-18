import {AutoForm, fieldFor, listFor, makeFormNode, observer, Panel, React, selectFor} from "focus4";
import {makeField, patchField} from "focus4/entity";

import {loadContactList} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class FormList extends AutoForm {

    entity = makeFormNode(mainStore.contactList, entity => {
        patchField(entity.nom, {isRequired: false});
        patchField(entity.prenom, () => ({isRequired: !!entity.nom.value}));
        return {
            nomPrenom: makeField(() => `${entity.nom.value || ""} ${entity.prenom.value || ""}`.trim(), {
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
                    LineComponent: observer(({data}: {data: FormList["entity"][0]}) => (
                        <div>
                            <h6>{data.nomPrenom.value || "Contact"}</h6>
                            {fieldFor(data.nom)}
                            {fieldFor(data.prenom)}
                            {fieldFor(data.email)}
                            {selectFor(data.civiliteCode, referenceStore.civilite, {labelKey: "libelle" as "libelle"})}
                        </div>
                    ))
                })}
            </Panel>
        );
    }
}
