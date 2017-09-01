import {observer, React} from "focus4";
import {Menu} from "focus4/application";

import {router} from "../stores";

export const StarterMenu = observer(() => (
    <Menu
        activeRoute={router.currentStore.prefix}
        menus={[{
            icon: "home",
            onClick: () => router.to("home"),
            route: "home"
        }, {
            icon: "business",
            onClick: () => router.to("test"),
            route: "test"
        }]}
    />
));
