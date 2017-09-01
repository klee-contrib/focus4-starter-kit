import {observer, React} from "focus4";
import {Layout} from "focus4/application";
import {render} from "react-dom";

import {router} from "../stores";

import {Header} from "./header";
import {Home} from "./home";
import {StarterMenu} from "./menu";

import {layout} from "./__style__/index.css";

const Main = observer(() => {
    const {currentStore} = router;
    if (currentStore.prefix === "home") {
        return <Home />;
    } else if (currentStore.prefix === "test") {
        return <div>Test Store "{currentStore.currentView.lol}"</div>;
    } else {
        return <div>déso</div>;
    }
});

render((
    <Layout
        appTheme={{layout: {layout}}}
        AppHeader={Header}
        MenuLeft={StarterMenu}
    >
        <Main />
    </Layout>
), document.getElementById("app"));
