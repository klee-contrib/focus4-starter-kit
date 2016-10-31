import {React, observer} from "autofocus";
import {Layout} from "autofocus/application";
import {render} from "react-dom";

import {viewStore} from "../router";
import {Home} from "./home";
import {List} from "./list";
import {Test} from "./test";

import {layout} from "./index.css";

const Main = observer(() => {
    switch (viewStore.currentView.page) {
        case "test": return <Test />;
        case "list": return <List />;
        default: return <Home />;
    }
});

render((
    <Layout injectedStyle={{layout: {layout, content: "", hasMenu: ""}}}>
        <Main />
    </Layout>
), document.getElementById("app"));
