import {React, translate, AutoForm, observer} from "autofocus";
import Panel = require("focus-components/components/panel");

import {mainStore} from "./../stores/main";
import {loadStructure, saveStructure} from "../services/main";
import {referenceStore} from "../stores/reference";
import {StructureData} from "./../model/main/structure";

@observer
export class Form extends AutoForm<{}, StructureData & {[key: string]: any}> {

    constructor(props: {}) {
        super(props, mainStore.structure, {load: loadStructure, save: saveStructure});
    }

    renderContent() {
        const {denominationSociale, capitalSocial, statutJuridiqueCode} = this.entity;
        return (
            <Panel title="form.title" actions={this.renderActions}>
                {translate("form.content")}
                {this.fieldFor(denominationSociale)}
                {this.fieldFor(capitalSocial)}
                {this.selectFor(statutJuridiqueCode, referenceStore.statutJuridique, {labelKey: "libelle"})}
            </Panel>
        );
    }
}
