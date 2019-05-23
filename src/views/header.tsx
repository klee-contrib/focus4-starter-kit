import {
    HeaderActions,
    HeaderBarRight,
    HeaderContent,
    HeaderScrolling,
    HeaderSummary,
    HeaderTopRow
} from "@focus4/layout";
import {observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";

import {router} from "../stores";
import {header} from "./home";

const headerStore = observable({
    canDeploy: true
});

export const Header = observer(() => (
    <HeaderScrolling canDeploy={headerStore.canDeploy}>
        <HeaderTopRow>
            <HeaderSummary>
                {router.currentStore.prefix === "home" ? header.summary : <strong>Salut Focus V4</strong>}
            </HeaderSummary>
            <HeaderBarRight>{router.currentStore.prefix === "home" ? header.barRight : null}</HeaderBarRight>
        </HeaderTopRow>
        <HeaderContent>
            {router.currentStore.prefix === "home" ? header.cartridge : <h2>Salut Focus V4</h2>}
        </HeaderContent>
        <HeaderActions
            primary={[
                {
                    onClick: () => (headerStore.canDeploy = !headerStore.canDeploy),
                    icon: "radio_button_checked"
                }
            ]}
        />
    </HeaderScrolling>
));
