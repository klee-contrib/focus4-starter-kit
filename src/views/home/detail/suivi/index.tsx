import {displayFor, i18n, listFor, observable, observer, Panel, Popin, React, stringFor} from "focus4";
import {patchField} from "focus4/entity";
import {Button} from "react-toolbox/lib/button";

import {EvenementNode} from "../../../../model/main/evenement";
import {loadSuivi} from "../../../../services/main";
import {mainStore} from "../../../../stores";

import {SuiviCreation} from "./creation";

// On patch en mode yolo ce noeud de store, pour la démo.
mainStore.suivi.evenementList.$transform = evt => {
    patchField(evt.commentaire, {displayFormatter: text => text && text.toUpperCase()});
};

@observer
export class SuiviComponent extends React.Component<{}, void> {

    @observable popinOpened = false;

    async componentWillMount() {
        mainStore.suivi.set(await loadSuivi());
    }

    render() {
        const {dateCreation, nombreEvenement, evenementList} = mainStore.suivi;
        return (
            <Panel title="Suivi de la structure">
                {displayFor(dateCreation)}
                {displayFor(nombreEvenement)}
                <h4>{i18n.t("suivi.evenement.title")}</h4>
                <Button label="Ajouter un évènement" onClick={() => this.popinOpened = true} icon="add" />
                <br /><br />
                {listFor({
                    data: evenementList,
                    LineComponent: observer(({data}: {data: EvenementNode}) => <span>{stringFor(data.date)} - {stringFor(data.commentaire)}</span>)
                })}
                <Popin opened={this.popinOpened} closePopin={() => this.popinOpened = false}>
                    <SuiviCreation close={() => this.popinOpened = false} />
                </Popin>
            </Panel>
        );
    }
}
