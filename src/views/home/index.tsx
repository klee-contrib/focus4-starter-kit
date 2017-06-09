import ScrollspyContainer from "focus-components/scrollspy-container";
import {action, applicationStore, React} from "focus4";
import {Button} from "react-toolbox/lib/button";

import {homeView} from "../../router";
import {Form} from "./form";
import {SuiviComponent} from "./suivi";

function toTest() {
    homeView.setView({
        id: Math.floor((Math.random() * 100)).toString(),
        page: "test"
    });
}

export class Home extends React.Component<{}, void> {

    componentWillMount() {
        applicationStore.setHeader({
            actions: {primary: [{
                onClick: () => applicationStore.canDeploy = !applicationStore.canDeploy,
                icon: "radio_button_checked"
            }]},
            barRight: <Button label="Va voir le test" onClick={action(toTest)} />,
            cartridge: <h2>Salut Focus V4</h2>,
            summary: <strong>Salut Focus V4</strong>
        });
    }

    render() {
        return (
            <ScrollspyContainer>
                <Form />
                <SuiviComponent />
            </ScrollspyContainer>
        );
    }
}
