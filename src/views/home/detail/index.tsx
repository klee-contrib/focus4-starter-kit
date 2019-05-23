import {ScrollspyContainer} from "@focus4/layout";
import React from "react";

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
