import {observer, React} from "focus4";
import {Layout} from "focus4/application";
import {render} from "react-dom";
import {Button} from "react-toolbox/lib/button";

import {router} from "../router";
import {Home} from "./home";
import {List} from "./list";
import {Test} from "./test";

import {layout} from "./index.css";

const Main = observer(() => {
    const {currentStore} = router;
    return (
        <div>
            <Button raised onClick={() => router.to("home")} label="Home" />
            <Button raised onClick={() => router.to("home/list" as "home")} label="List" />
            <Button raised onClick={() => router.to("test")} label="Test" />
            {(() => {
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
            })()}
        </div>
    );
});

render((
    <Layout appTheme={{layout: {layout}}}>
        <Main />
    </Layout>
), document.getElementById("app"));
