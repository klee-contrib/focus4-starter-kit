import {useObserver} from "mobx-react";

import {fieldFor, Form, Panel, useFormActions, useFormNode} from "@focus4/forms";

import {mainStore} from "../../../../stores";

export function SuiviCreation({close}: {close: () => void}) {
    const entity = useFormNode(mainStore.evenement, s => s.edit(() => true));
    const actions = useFormActions(entity, a =>
        a
            .save(async x => {
                mainStore.suivi.evenementList.pushNode({...x, id: Math.random()});
            })
            .on(["save", "cancel"], close)
    );

    return useObserver(() => (
        <Form {...actions.formProps}>
            <Panel title="Ajouter un évènement" {...actions.panelProps}>
                {fieldFor(entity.commentaire)}
                {fieldFor(entity.date)}
            </Panel>
        </Form>
    ));
}
