import {Layout} from "@focus4/layout";
import {observer} from "mobx-react";
import * as React from "react";
import {render} from "react-dom";

import {router} from "../router";

import {Header} from "./header";
import {Home} from "./home";
import {StarterMenu} from "./menu";

import {layout, popin} from "./__style__/index.module.css";

const Main = observer(() =>
    router.switch(
        a => a,
        prefix => {
            if (prefix === "home") {
                return <Home router={router.sub(a => a("home"))} />;
            } else if (prefix === "test") {
                return (
                    <>
                        <Header summary={<strong>Salut Focus V4</strong>} cartridge={<h2>Salut Focus V4</h2>} />
                        <div>Test Store "{router.state.test.lol}"</div>
                    </>
                );
            } else {
                return <div>déso</div>;
            }
        }
    )
);

render(
    <Layout appTheme={{layout: {layout}, popin: {popin}}} menu={<StarterMenu />}>
        <Main />
    </Layout>,
    document.getElementById("app")
);
