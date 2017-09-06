import {AutoForm, i18n, observer, Panel, React} from "focus4";

import {StructureNode} from "../../../model/main/structure";
import {loadStructure, saveStructure} from "../../../services/main";
import {homeViewStore, mainStore, referenceStore} from "../../../stores";

@observer
export class Form extends AutoForm<{}, StructureNode> {
    init() {
        this.formInit(mainStore.structure, {
            getLoadParams: () => homeViewStore.withView(({page, id}) => !page && id && [id]),
            load: loadStructure,
            save: saveStructure
        });
    }

    renderContent() {
        const {denominationSociale, capitalSocial, statutJuridiqueCode, adresse} = this.entity;
        return (
            <Panel title="form.title" {...this.getPanelProps()}>
                {i18n.t("form.content")}
                {this.fieldFor(denominationSociale)}
                {this.fieldFor(capitalSocial)}
                {this.selectFor(statutJuridiqueCode, referenceStore.statutJuridique, {labelKey: "libelle" as "libelle"})}
                {this.fieldFor(adresse.ville)}
            </Panel>
        );
    }
}
