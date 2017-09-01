import {React} from "focus4";
import {ScrollspyContainer} from "focus4/components";

import {Form} from "./form";
import {SuiviComponent} from "./suivi";

export function Detail() {
    return (
        <ScrollspyContainer>
            <Form />
            <SuiviComponent />
        </ScrollspyContainer>
    );
}
