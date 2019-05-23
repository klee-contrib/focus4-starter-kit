import {observer} from "mobx-react";
import React from "react";
import {Button} from "react-toolbox/lib/button";

import {homeViewStore} from "../../stores";

import {Detail} from "./detail";
import {List} from "./list";
export {header} from "./header";

import {salut} from "./__style__/index.css";

export const Home = observer(() => {
    let page;
    switch (homeViewStore.currentView.page) {
        case "list":
            page = <List />;
            break;
        default:
            page = <Detail />;
            break;
    }
    return (
        <>
            <Button
                raised
                primary={!homeViewStore.currentView.page}
                onClick={() => homeViewStore.setView({page: undefined})}
                label="Home"
            />
            <Button
                raised
                primary={!!homeViewStore.currentView.page}
                onClick={() => homeViewStore.setView({page: "list"})}
                label="List"
            />
            <strong className={salut}>{`Salut identifiant ${homeViewStore.currentView.id}`}</strong>
            {page}
        </>
    );
});
