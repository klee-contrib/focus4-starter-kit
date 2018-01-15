import {autobind, AutoForm, makeFormNode, observer, Panel, React} from "focus4";

import {mainStore} from "../../../../stores";

@autobind
@observer
export class SuiviCreation extends AutoForm<{close: () => void}> {

    entity = makeFormNode(mainStore.evenement);

    init() {
        mainStore.evenement.clear();
        this.formInit(
            {save: async x  => { mainStore.suivi.evenementList.pushNode(x); return x; }},
            {initiallyEditing: true}
        );
    }

    toggleEdit(edit: boolean) {
        if (!edit) {
            this.props.close();
        } else {
            super.toggleEdit(true);
        }
    }

    onFormSaved() {
        this.props.close();
    }

    renderContent() {
        return (
            <Panel hideOnScrollspy title="Ajouter un évènement" {...this.getPanelProps()}>
                {this.fieldFor(this.entity.commentaire)}
                {this.fieldFor(this.entity.date)}
            </Panel>
        );
    }
}
