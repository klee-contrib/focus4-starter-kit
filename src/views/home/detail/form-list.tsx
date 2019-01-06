import {
    fieldFor,
    Form,
    makeField,
    makeFormActions,
    makeFormNode,
    observable,
    observer,
    Panel,
    patchField,
    React,
    selectFor
} from "focus4";
import {listFor} from "focus4/collections";
import {patchNodeEdit} from "focus4/entity";
import {Input} from "react-toolbox/lib/input";

import {loadContactList} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class FormList extends React.Component {
    @observable magicWord = "";

    entity = makeFormNode(mainStore.contactList, {isEdit: () => this.magicWord === "yolo"}, entity => {
        patchField(entity.nom, {isRequired: false});
        patchField(entity.prenom, () => ({isRequired: !!entity.nom.value}));

        patchNodeEdit(entity, () => !!(entity.id.value! % 2));

        return {
            nomPrenom: makeField(() => `${entity.nom.value || ""} ${entity.prenom.value || ""}`.trim(), {
                label: "contact.nomPrenom"
            })
        };
    });

    actions = makeFormActions(this.entity, {
        getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [id]),
        load: loadContactList,
        save: async x => x
    });

    render() {
        return (
            <Form {...this.actions.formProps}>
                <Panel title="Formulaire liste" {...this.actions.panelProps}>
                    <Input value={this.magicWord} onChange={(text: string) => (this.magicWord = text)} />
                    {listFor({
                        data: this.entity,
                        perPage: 2,
                        isManualFetch: true,
                        itemKey: d => d.id.value,
                        LineComponent: observer(({data}) => (
                            <>
                                <h6>{data.nomPrenom.value || "Contact"}</h6>
                                {fieldFor(data.nom)}
                                {fieldFor(data.prenom)}
                                {fieldFor(data.email)}
                                {selectFor(data.civiliteCode, referenceStore.civilite)}
                            </>
                        ))
                    })}
                </Panel>
            </Form>
        );
    }
}
