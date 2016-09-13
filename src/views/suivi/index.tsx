import {React, observer, displayFor, listFor} from "autofocus";
import Panel = require("focus-components/components/panel");

import {loadSuivi} from "../../services/main";
import {mainStore} from "../../stores/main";

import {EvenementLine} from "./evenement-line";

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
                {listFor(evenementList.value, {LineComponent: EvenementLine})}
            </Panel>
        );
    }
}
