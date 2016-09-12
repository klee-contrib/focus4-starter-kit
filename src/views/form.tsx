import {React, translate} from "autofocus";
import Panel = require("focus-components/components/panel");

export class Form extends React.Component<{}, void> {
    render() {
        return (
            <Panel title="form.title">
                {translate("form.content")}
            </Panel>
        );
    }
}
