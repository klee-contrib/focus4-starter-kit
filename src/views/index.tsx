import {observer, React} from "focus4";
import {Layout} from "focus4/application";
import Button from "focus-components/button";
import {render} from "react-dom";

import {start} from "../router";
import {Home} from "./home";
import {List} from "./list";
import {Test} from "./test";

import {layout} from "./index.css";

const router = start();

const Main = observer(() => {
    const {currentStore} = router;
    return (
        <div>
            <Button handleOnClick={() => router.to("home")} label="Home" />
            <Button handleOnClick={() => router.to("test")} label="Test" />
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
    <Layout injectedStyle={{layout: {layout}}}>
        <Main />
    </Layout>
), document.getElementById("app"));
