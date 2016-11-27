import {observer, React} from "autofocus";
import {Layout} from "autofocus/application";
import {render} from "react-dom";

import {start} from "../router";
import {Home} from "./home";
import {List} from "./list";
import {Test} from "./test";

import {layout} from "./index.css";

const router = start();

const Main = observer(() => {
    const {currentStore} = router;
    if (currentStore.prefix === "home") {
        switch (currentStore.currentView.page) {
            case "test": return <Test />;
            case "list": return <List />;
            default: return <Home />;
        }
    } else if (currentStore.prefix === "test") {
        return <div>Test Store "{currentStore.currentView.lol}"</div>;
    } else {
        return <div>déso</div>;
    }
});

render((
    <Layout injectedStyle={{layout: {layout, content: "", hasMenu: ""}}}>
        <Main />
    </Layout>
), document.getElementById("app"));
