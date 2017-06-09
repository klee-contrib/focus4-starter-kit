import {AutoForm, i18n, observer, Panel, React} from "focus4";

import {StructureNode} from "../../model/main/structure";
import {homeView} from "../../router";
import {loadStructure, saveStructure} from "../../services/main";
import {mainStore} from "../../stores/main";
import {referenceStore} from "../../stores/reference";

@observer
export class Form extends AutoForm<{}, StructureNode> {
    init() {
        this.formInit(mainStore.structure, {
            getLoadParams: () => [+homeView.currentView.id!],
            load: loadStructure,
            save: saveStructure
        });
    }

    renderContent() {
        const {denominationSociale, capitalSocial, statutJuridiqueCode} = this.entity;
        return (
            <Panel title="form.title" {...this.getPanelProps()}>
                {i18n.t("form.content")}
                {this.fieldFor(denominationSociale)}
                {this.fieldFor(capitalSocial)}
                {this.selectFor(statutJuridiqueCode, referenceStore.statutJuridique, {labelKey: "libelle" as "libelle"})}
            </Panel>
        );
    }
}
