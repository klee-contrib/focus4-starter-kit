import {React, observer} from "autofocus";
import {Layout} from "autofocus/application";
import {render} from "react-dom";

import {viewStore} from "../router";
import {Home} from "./home";
import {Test} from "./test";

const Main = observer(() => viewStore.currentView.page === "test" ? <Test /> : <Home />);

render((
    <Layout>
        <Main />
    </Layout>
), document.getElementById("app"));
