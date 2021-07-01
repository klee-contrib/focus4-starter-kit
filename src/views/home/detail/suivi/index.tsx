import i18next from "i18next";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import {Component} from "react";

import {listFor} from "@focus4/collections";
import {fieldFor, Panel} from "@focus4/forms";
import {Content, Popin} from "@focus4/layout";
import {stringFor} from "@focus4/stores";
import {Button} from "@focus4/toolbox";

import {EvenementNode} from "../../../../model/main/evenement";
import {loadSuivi} from "../../../../services/main";

import {mainStore} from "../../../../stores";

import {SuiviCreation} from "./creation";

@observer
export class SuiviComponent extends Component {
    @observable popinOpened = false;

    constructor(props: {}) {
        super(props);
        makeObservable(this);
    }

    async componentDidMount() {
        mainStore.suivi.replace(await loadSuivi());
    }

    render() {
        const {dateCreation, nombreEvenement, evenementList} = mainStore.suivi;
        return (
            <Panel title="Suivi de la structure">
                {fieldFor(dateCreation)}
                {fieldFor(nombreEvenement)}
                <h4>{i18next.t("suivi.evenement.title")}</h4>
                <Button icon="add" label="Ajouter un évènement" onClick={() => (this.popinOpened = true)} />
                <br />
                <br />
                {listFor({
                    data: evenementList,
                    itemKey: d => d.id.value,
                    LineComponent: observer(({data}: {data: EvenementNode}) => (
                        <span>
                            {stringFor(data.date)} - {stringFor(data.commentaire)}
                        </span>
                    ))
                })}
                <Popin closePopin={() => (this.popinOpened = false)} opened={this.popinOpened}>
                    <Content>
                        <SuiviCreation close={() => (this.popinOpened = false)} />
                    </Content>
                </Popin>
            </Panel>
        );
    }
}
