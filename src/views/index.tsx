import {Layout} from "@focus4/layout";
import {useObserver} from "mobx-react";
import {render} from "react-dom";

import {router} from "../router";

import {Header} from "./header";
import {Home} from "./home";
import {StarterMenu} from "./menu";

import css from "./__style__/index.css";

function Main() {
    return useObserver(() => {
        switch (router.get(a => a)) {
            case "home":
                return <Home router={router.sub(a => a("home"))} />;
            case "test":
                return (
                    <>
                        <Header summary={<strong>Salut Focus V4</strong>} cartridge={<h2>Salut Focus V4</h2>} />
                        <div>Test Store "{router.state.test.lol}"</div>
                    </>
                );
            case undefined:
                return <div>déso</div>;
        }
    });
}

render(
    <Layout appTheme={{layout: {layout: css.layout}, popin: {popin: css.popin}}} menu={<StarterMenu />}>
        <Main />
    </Layout>,
    document.getElementById("app")
);
