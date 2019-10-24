import {listFor} from "@focus4/collections";
import {fieldFor, Form, makeFormActions, makeFormNode, Panel, selectFor} from "@focus4/forms";
import {Input} from "@focus4/toolbox";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {useObserver} from "mobx-react-lite";
import * as React from "react";

import {loadContactList} from "../../../services/main";
import {mainStore, referenceStore} from "../../../stores";

@observer
export class FormList extends React.Component {
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
                            .value(() => `${item.nom.value || ""} ${item.prenom.value || ""}`.trim())
                            .metadata({label: "contact.nomPrenom"})
                    )
            )
    );

    actions = makeFormActions(this, this.entity, a => a.params().load(loadContactList));

    render() {
        return (
            <Form {...this.actions.formProps}>
                <Panel title="Formulaire liste" name="liste" {...this.actions.panelProps}>
                    <Input value={this.magicWord} onChange={(text: string) => (this.magicWord = text)} />
                    {listFor({
                        data: this.entity,
                        perPage: 2,
                        isManualFetch: true,
                        itemKey: d => d.id.value,
                        LineComponent: ({data}) =>
                            useObserver(() => (
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
