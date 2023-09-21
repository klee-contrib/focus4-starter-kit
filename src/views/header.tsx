import {useObserver} from "mobx-react";
import {ReactNode} from "react";

import {HeaderBarLeft, HeaderBarRight, HeaderScrolling, HeaderSummary, HeaderTopRow} from "@focus4/layout";
import {colorScheme} from "@focus4/styling";
import {IconButton, Switch} from "@focus4/toolbox";

import css from "./__style__/header.css";

export function Header({children}: {children?: ReactNode}) {
    return useObserver(() => (
        <HeaderScrolling canDeploy={false} theme={{scrolling: css.header}}>
            <HeaderTopRow>
                <HeaderBarLeft>
                    <strong>Starter Kit Focus v4</strong>
                </HeaderBarLeft>
                <HeaderSummary>
                    <div className={css.summary}>{children}</div>
                </HeaderSummary>
                <HeaderBarRight>
                    <div className={css.user}>
                        <strong>Utilisateur connecté [Administrateur]</strong>
                        <IconButton className={css.button} icon="account_circle" />
                        <Switch
                            iconOff="light_mode"
                            iconOn="dark_mode"
                            onChange={() => (colorScheme.dark = !colorScheme.dark)}
                            value={colorScheme.dark}
                        />
                    </div>
                </HeaderBarRight>
            </HeaderTopRow>
        </HeaderScrolling>
    ));
}
