import {observer, React} from "focus4";
import {MainMenu, MainMenuItem} from "focus4/layout";

import {router} from "../stores";

export const StarterMenu = observer(() => (
    <MainMenu activeRoute={router.currentStore.prefix}>
        <MainMenuItem icon="home" onClick={() => router.to("home")} route="home" />
        <MainMenuItem icon="business" onClick={() => router.to("test")} route="test" />
    </MainMenu>
));
