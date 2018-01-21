import {React} from "focus4";
import {ScrollspyContainer} from "focus4/components";

import {BasicForm} from "./form";
import {FormList} from "./form-list";
import {SuiviComponent} from "./suivi";

export function Detail() {
    return (
        <ScrollspyContainer>
            <BasicForm />
            <FormList />
            <SuiviComponent />
        </ScrollspyContainer>
    );
}
