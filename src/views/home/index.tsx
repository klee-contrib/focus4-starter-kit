import {action, applicationStore, observer, React} from "autofocus";
import Button from "focus-components/button";
import Input from "focus-components/input-text";
import ScrollspyContainer from "focus-components/scrollspy-container";

import {homeView} from "../../router";
import {Form} from "./form";
import {SuiviComponent} from "./suivi";

function toTest() {
    homeView.setView({
        id: Math.floor((Math.random() * 100)).toString(),
        page: "test"
    });
}

const RouteDisplay = observer(() => (
    <div>
        {`Route: ${applicationStore.route || ""}`}
        <Button label="Va voir le test" handleOnClick={action(toTest)} />
    </div>
));

export class Home extends React.Component<{}, void> {

    componentWillMount() {
        applicationStore.setHeader({
             actions: {primary: [{
                action: () => applicationStore.canDeploy = !applicationStore.canDeploy,
                icon: "radio_button_checked"
            }]},
            barLeft: <Input name="route" onChange={e => applicationStore.route = e} />,
            barRight: <RouteDisplay />,
            cartridge: <h2>Salut autofocus</h2>,
            summary: <strong>Salut autofocus</strong>
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
