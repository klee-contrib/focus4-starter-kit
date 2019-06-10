import {MainMenu, MainMenuItem} from "@focus4/layout";
import {observer} from "mobx-react";
import * as React from "react";

import {router} from "../stores";

export const StarterMenu = observer(() => (
    <MainMenu activeRoute={router.currentStore.prefix} showOverlay>
        <MainMenuItem icon="home" onClick={() => router.to("home")} route="home" />
        <MainMenuItem icon="business" onClick={() => router.to("test")} route="test" />
        <MainMenuItem icon="add">
            <MainMenuItem icon="home" onClick={() => router.to("home")} route="home" label="Accueil" />
            <MainMenuItem icon="add">
                <span style={{whiteSpace: "pre"}}>Ce sous menu ne sert vraiment à rien</span>
                <MainMenuItem icon="business" onClick={() => router.to("test")} route="test" />
                YOLO
            </MainMenuItem>
        </MainMenuItem>
    </MainMenu>
));
