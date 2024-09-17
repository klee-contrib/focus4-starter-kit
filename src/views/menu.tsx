import {MainMenu, MainMenuItem} from "@focus4/layout";
import {FontIcon} from "@focus4/toolbox";

import {router} from "../router";

import css from "./__style__/menu.css";

export function StarterMenu() {
    return (
        <MainMenu activeRoute={router.get(x => x)} showOverlay>
            <div className={css.logo}>
                <FontIcon>home_repair_service</FontIcon>
            </div>
            <MainMenuItem href={router.href(x => x)} icon="home" label="Accueil" route="" />
            <MainMenuItem
                href={router.href(x => x("utilisateurs"))}
                icon="group"
                label="Utilisateurs"
                route="utilisateurs"
            />
            <MainMenuItem href={router.href(x => x("profils"))} icon="settings" label="Profils" route="profils" />
        </MainMenu>
    );
}
