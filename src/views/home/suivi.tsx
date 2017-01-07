import {displayFor, i18n, listFor, observer, React, stringFor} from "autofocus";
import Panel from "focus-components/panel";

import {loadSuivi} from "../../services/main";
import {mainStore} from "../../stores/main";

import {EvenementNode} from "../../model/main/evenement";

@observer
export class SuiviComponent extends React.Component<{}, void> {

    async componentWillMount() {
        mainStore.suivi.set(await loadSuivi());
    }

    render() {
        const {dateCreation, nombreEvenement, evenementList} = mainStore.suivi;
        return (
            <Panel title="Suivi de la structure" Buttons={null}>
                {displayFor(dateCreation)}
                {displayFor(nombreEvenement)}
                <h4>{i18n.t("suivi.evenement.title")}</h4>
                {listFor({
                    data: evenementList.value,
                    LineComponent: observer(({data}: {data: EvenementNode}) => <li>{stringFor(data.date)} - {stringFor(data.commentaire)}</li>)
                })}
            </Panel>
        );
    }
}
