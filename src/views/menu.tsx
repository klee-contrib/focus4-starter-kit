import {observer, React} from "focus4";
import {Menu, MenuItem} from "focus4/layout";

import {router} from "../stores";

export const StarterMenu = observer(() => (
    <Menu activeRoute={router.currentStore.prefix}>
        <MenuItem
            icon="home"
            onClick={() => router.to("home")}
            route="home"
        />
        <MenuItem
            icon="business"
            onClick={() => router.to("test")}
            route="test"
        />
    </Menu>
));
