import {MainMenu, MainMenuItem} from "@focus4/layout";
import {observer} from "mobx-react";
import * as React from "react";

import {router} from "../router";

export const StarterMenu = observer(() => (
    <MainMenu activeRoute={router.get(a => a)} showOverlay>
        <MainMenuItem icon="home" onClick={() => router.to(a => a("home")(router.state.home.id ?? 1))} route="home" />
        <MainMenuItem
            icon="business"
            onClick={() => router.to(a => a("test")(router.state.test.lol ?? "salut"))}
            route="test"
        />
        <MainMenuItem icon="add">
            <MainMenuItem
                icon="home"
                onClick={() => router.to(a => a("home")(router.state.home.id ?? 1))}
                route="home"
                label="Accueil"
            />
            <MainMenuItem icon="add">
                <span style={{whiteSpace: "pre"}}>Ce sous menu ne sert vraiment à rien</span>
                <MainMenuItem
                    icon="business"
                    onClick={() => router.to(a => a("test")(router.state.test.lol ?? "salut"))}
                    route="test"
                />
                YOLO
            </MainMenuItem>
        </MainMenuItem>
    </MainMenu>
));
