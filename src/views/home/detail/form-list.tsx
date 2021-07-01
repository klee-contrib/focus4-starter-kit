import {makeObservable, observable} from "mobx";
import {observer, useObserver} from "mobx-react";
import {Component} from "react";

import {listFor} from "@focus4/collections";
import {fieldFor, Form, makeFormActions, makeFormNode, Panel, selectFor} from "@focus4/forms";
import {FieldEntry, FormNode} from "@focus4/stores";
import {Input} from "@focus4/toolbox";

import {ContactEntity} from "../../../model/main/contact";
import {loadContactList} from "../../../services/main";

import {mainStore, referenceStore} from "../../../stores";

@observer
export class FormList extends Component {
    @observable magicWord = "";

    entity = makeFormNode(this, mainStore.contactList, s =>
        s
            .edit(() => this.magicWord === "yolo")
            .items(i =>
                i
                    .edit(item => !!(item.id.value! % 2))
                    .patch("nom", f => f.metadata({isRequired: false}))
                    .patch("prenom", (f, item) => f.metadata(() => ({isRequired: !!item.nom.value})))
                    .add("nomPrenom", (f, item) =>
                        f
                            .value(() => `${item.nom.value ?? ""} ${item.prenom.value ?? ""}`.trim())
                            .metadata({label: "contact.nomPrenom"})
                    )
            )
    );

    actions = makeFormActions(this, this.entity, a => a.params().load(loadContactList));

    constructor(props: {}) {
        super(props);
        makeObservable(this);
    }

    render() {
        return (
            <Form {...this.actions.formProps}>
                <Panel name="liste" title="Formulaire liste" {...this.actions.panelProps}>
                    <Input onChange={(text: string) => (this.magicWord = text)} value={this.magicWord} />
                    {listFor({
                        data: this.entity,
                        perPage: 2,
                        isManualFetch: true,
                        itemKey: d => d.id.value,
                        LineComponent: FormLine
                    })}
                </Panel>
            </Form>
        );
    }
}

function FormLine({
    data
}: {
    data: FormNode<typeof ContactEntity & {nomPrenom: FieldEntry<"string">}, typeof ContactEntity>;
}) {
    return useObserver(() => (
        <>
            <h6>{data.nomPrenom.value ?? "Contact"}</h6>
            {fieldFor(data.nom)}
            {fieldFor(data.prenom)}
            {fieldFor(data.email)}
            {selectFor(data.civiliteCode, referenceStore.civilite)}
        </>
    ));
}
