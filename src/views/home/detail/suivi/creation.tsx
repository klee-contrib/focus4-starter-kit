import {autobind, AutoForm, fieldFor, makeFormNode, observer, Panel, React} from "focus4";

import {mainStore} from "../../../../stores";

@autobind
@observer
export class SuiviCreation extends AutoForm<{close: () => void}> {

    entity = makeFormNode(mainStore.evenement, undefined, true);

    init() {
        mainStore.evenement.clear();
        this.formInit({save: async x  => { mainStore.suivi.evenementList.pushNode(x); return x; }});
    }

    toggleEdit(edit: boolean) {
        if (!edit) {
            this.props.close();
        } else {
            super.toggleEdit(true);
        }
    }

    onFormSaved() {
        super.onFormSaved();
        this.props.close();
    }

    renderContent() {
        return (
            <Panel hideOnScrollspy title="Ajouter un évènement" {...this.getPanelProps()}>
                {fieldFor(this.entity.commentaire)}
                {fieldFor(this.entity.date)}
            </Panel>
        );
    }
}
