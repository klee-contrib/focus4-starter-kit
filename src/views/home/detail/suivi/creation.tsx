import {fieldFor, Form, makeFormActions, makeFormNode, observer, Panel, React} from "focus4";

import {mainStore} from "../../../../stores";

@observer
export class SuiviCreation extends React.Component<{close: () => void}> {
    entity = makeFormNode(this, mainStore.evenement, {isEdit: true, isEmpty: true});
    actions = makeFormActions(
        this,
        this.entity,
        {
            save: async x => {
                mainStore.suivi.evenementList.pushNode(x);
            }
        },
        {
            onFormSaved: () => this.props.close(),
            onClickCancel: () => this.props.close()
        }
    );

    render() {
        return (
            <Form {...this.actions.formProps}>
                <Panel hideOnScrollspy title="Ajouter un évènement" {...this.actions.panelProps}>
                    {fieldFor(this.entity.commentaire)}
                    {fieldFor(this.entity.date)}
                </Panel>
            </Form>
        );
    }
}
