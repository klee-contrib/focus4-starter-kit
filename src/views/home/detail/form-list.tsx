import {fieldFor, Form, listFor, makeField, makeFormActions, makeFormNode, observable, observer, Panel, patchField, React, selectFor} from "focus4";
import {patchNodeEdit} from "focus4/entity";
import {Input} from "react-toolbox/lib/input";

import {loadContactList} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class FormList extends React.Component<{}, void> {

    @observable magicWord = "";

    entity = makeFormNode(mainStore.contactList, entity => {
        patchField(entity.nom, {isRequired: false});
        patchField(entity.prenom, () => ({isRequired: !!entity.nom.value}));

        patchNodeEdit(entity, () => !!(entity.id.value! % 2));

        return {
            nomPrenom: makeField(() => `${entity.nom.value || ""} ${entity.prenom.value || ""}`.trim(), {
                label: "contact.nomPrenom"
            })
        };
    }, () => this.magicWord === "yolo");

    actions = makeFormActions(this.entity, {
        getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [id]),
        load: loadContactList,
        save: async x => x
    });

    render() {
        return (
            <Form {...this.actions.formProps}>
                <Panel title="Formulaire liste" {...this.actions.panelProps}>
                    <Input value={this.magicWord} onChange={(text: string) => this.magicWord = text} />
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
            </Form>
        );
    }
}
