import {ReactNode} from "react";

import {HeaderBarLeft, HeaderBarRight, HeaderScrolling, HeaderSummary, HeaderTopRow} from "@focus4/layout";
import {IconButton} from "@focus4/toolbox";

import css from "./__style__/header.css";

export function Header({children}: {children?: ReactNode}) {
    return (
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
                    </div>
                </HeaderBarRight>
            </HeaderTopRow>
        </HeaderScrolling>
    );
}
