import {React, i18n, AutoForm, observer} from "autofocus";
import Panel from  "focus-components/panel";

import {mainStore} from "../../stores/main";
import {loadStructure, saveStructure} from "../../services/main";
import {referenceStore} from "../../stores/reference";
import {StructureNode} from "../../model/main/structure";

@observer
export class Form extends AutoForm<{}, StructureNode> {

    constructor(props: {}) {
        super(props, mainStore.structure, {load: loadStructure, save: saveStructure});
    }

    renderContent() {
        const {denominationSociale, capitalSocial, statutJuridiqueCode} = this.entity;
        return (
            <Panel title="form.title" {...this.getPanelButtonProps()}>
                {i18n.t("form.content")}
                {this.fieldFor(denominationSociale)}
                {this.fieldFor(capitalSocial)}
                {this.selectFor(statutJuridiqueCode, referenceStore.statutJuridique, {labelKey: "libelle"})}
            </Panel>
        );
    }
}
