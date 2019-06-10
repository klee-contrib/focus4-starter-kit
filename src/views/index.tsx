import {Layout} from "@focus4/layout";
import {observer} from "mobx-react";
import * as React from "react";
import {render} from "react-dom";

import {router} from "../stores";

import {Header} from "./header";
import {Home} from "./home";
import {StarterMenu} from "./menu";

import {layout, popin} from "./__style__/index.module.css";

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

render(
    <Layout appTheme={{layout: {layout}, popin: {popin}}} menu={<StarterMenu />}>
        <Header />
        <Main />
    </Layout>,
    document.getElementById("app")
);
