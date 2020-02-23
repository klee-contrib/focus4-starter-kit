import {Button} from "@focus4/toolbox";
import {observer} from "mobx-react";
import * as React from "react";

import {homeViewStore} from "../../stores";

import {Detail} from "./detail";
import {HomeList} from "./list";

import {Header} from "../header";
import {salut} from "./__style__/index.module.css";

export const Home = observer(() => {
    let page;
    switch (homeViewStore.currentView.page) {
        case "list":
            page = <HomeList />;
            break;
        default:
            page = <Detail />;
            break;
    }
    return (
        <>
            <Header
                cartridge={<h2>{`Salut identifiant ${homeViewStore.currentView.id}`}</h2>}
                summary={<strong>{`Salut identifiant ${homeViewStore.currentView.id}`}</strong>}
                barRight={
                    <Button
                        label="id au hasard"
                        onClick={() => homeViewStore.setView({id: `${Math.floor(Math.random() * 100)}`})}
                    />
                }
            />
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
