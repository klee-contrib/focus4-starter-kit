import {Button} from "@focus4/toolbox";
import {useObserver} from "mobx-react";
import * as React from "react";

import {HomeRouter} from "../../router";
import {Header} from "../header";
import {Detail} from "./detail";
import {HomeList} from "./list";

import css from "./__style__/index.css";

export function Home({router}: {router: HomeRouter}) {
    return useObserver(() => (
        <>
            <Header
                cartridge={<h2>{`Salut identifiant ${router.state.id}`}</h2>}
                summary={<strong>{`Salut identifiant ${router.state.id}`}</strong>}
                barRight={
                    <Button label="id au hasard" onClick={() => (router.state.id = Math.floor(Math.random() * 100))} />
                }
            />
            <Button
                raised
                primary={!router.is(a => a("id")("list"))}
                onClick={() => router.to(a => a(router.state.id))}
                label="Home"
            />
            <Button
                raised
                primary={router.is(a => a("id")("list"))}
                onClick={() => router.to(a => a(router.state.id)("list"))}
                label="List"
            />
            <strong className={css.salut}>{`Salut identifiant ${router.state.id}`}</strong>
            {router.is(a => a("id")("list")) ? <HomeList /> : <Detail />}
        </>
    ));
}
