import {React} from "autofocus";
import {Layout} from "autofocus/application";
import {render} from "react-dom";

import {Index} from "../views";

render((
    <Layout>
        <Index />
    </Layout>
), document.getElementById("app"));
