import {useObserver} from "mobx-react";

import {Button} from "@focus4/toolbox";

import {HomeRouter} from "../../router";
import {Header} from "../header";

import {Detail} from "./detail";
import {HomeList} from "./list";

import css from "./__style__/index.css";

export function Home({router}: {router: HomeRouter}) {
    return useObserver(() => (
        <>
            <Header
                barRight={
                    <Button label="id au hasard" onClick={() => (router.state.id = Math.floor(Math.random() * 100))} />
                }
                cartridge={<h2>{`Salut identifiant ${router.state.id}`}</h2>}
                summary={<strong>{`Salut identifiant ${router.state.id}`}</strong>}
            />
            <Button
                label="Home"
                onClick={() => router.to(a => a(router.state.id))}
                primary={!router.is(a => a("id")("list"))}
                raised
            />
            <Button
                label="List"
                onClick={() => router.to(a => a(router.state.id)("list"))}
                primary={router.is(a => a("id")("list"))}
                raised
            />
            <strong className={css.salut}>{`Salut identifiant ${router.state.id}`}</strong>
            {router.is(a => a("id")("list")) ? <HomeList /> : <Detail />}
        </>
    ));
}
