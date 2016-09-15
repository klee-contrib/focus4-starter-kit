import {React, applicationStore, observer} from "autofocus";
import Input = require("focus-components/components/input/text");
import ScrollspyContainer = require("focus-components/components/scrollspy-container");

import {Form} from "./form";
import {SuiviComponent} from "./suivi";

const RouteDisplay = observer(() => (
    <div>
        {`Route: ${applicationStore.route || ""}`}
    </div>
));

export class Index extends React.Component<{}, void> {

    componentWillMount() {
        applicationStore.setHeader({
            barLeft: <Input name="route" onChange={e => applicationStore.route = e} />,
            barRight: <RouteDisplay />,
            cartridge: <h2>Salut autofocus</h2>,
            summary: <strong>Salut autofocus</strong>,
            actions: {primary: [{
                action: () => applicationStore.canDeploy = !applicationStore.canDeploy,
                icon: "radio_button_checked"
            }]}
        });
    }

    render() {
        return (
            <ScrollspyContainer gridMenuSize={2} gridContentSize={10}>
                <Form id={1} />
                <SuiviComponent />
            </ScrollspyContainer>
        );
    }
}
