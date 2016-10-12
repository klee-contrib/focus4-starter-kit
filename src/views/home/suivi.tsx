import {React, observer, translate} from "autofocus";
import {displayFor, listFor, stringFor} from "autofocus/entity";
import Panel = require("focus-components/components/panel");

import {loadSuivi} from "../../services/main";
import {mainStore} from "../../stores/main";

import {EvenementData} from "../../model/main/evenement";

@observer
export class SuiviComponent extends React.Component<{}, void> {

    async componentWillMount() {
        mainStore.suivi.set(await loadSuivi());
    }

    render() {
        const {dateCreation, nombreEvenement, evenementList} = mainStore.suivi;
        return (
            <Panel title="Suivi de la structure">
                {displayFor(dateCreation)}
                {displayFor(nombreEvenement)}
                <h4>{translate("suivi.evenement.title")}</h4>
                {listFor(evenementList.value, {
                    LineComponent: observer(({data}: {data?: EvenementData}) => <li>{stringFor(data.date)} - {stringFor(data.commentaire)}</li>)
                })}
            </Panel>
        );
    }
}
