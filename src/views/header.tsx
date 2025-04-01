import {useObserver} from "mobx-react";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";

import {colorScheme, messageStore} from "@focus4/core";
import {FilAriane, HeaderItem, HeaderScrolling, HeaderTopRow} from "@focus4/layout";
import {toBem} from "@focus4/styling";
import {Dropdown, FontIcon, IconButton, Switch} from "@focus4/toolbox";

import {router} from "../router";

import css from "./__style__/header.css";

const theme = toBem(css);

export function Header({
    children,
    icon,
    paramResolver
}: {
    children?: ReactNode;
    icon: string;
    paramResolver?: () => string;
}) {
    const {i18n} = useTranslation();

    return useObserver(() => (
        <HeaderScrolling theme={{scrolling: theme.header()}}>
            <HeaderTopRow>
                <HeaderItem theme={{item: theme.item()}}>
                    <strong>Starter Kit Focus v4</strong>
                </HeaderItem>
                <HeaderItem fillWidth theme={{item: theme.item()}}>
                    <FontIcon>{icon}</FontIcon>
                    <FilAriane paramResolver={paramResolver} router={router} />
                </HeaderItem>
                <HeaderItem theme={{item: theme.item({user: true})}}>
                    <strong>Utilisateur connecté [Administrateur]</strong>
                    <IconButton
                        className={css.button}
                        icon="account_circle"
                        onClick={() =>
                            messageStore.addInformationMessage({
                                label: "Il n'y a pas d'utilisateur connecté...",
                                action: {label: "Se connecter", onClick: () => console.info("¯\\_(ツ)_/¯")}
                            })
                        }
                    />
                    <Dropdown
                        hasUndefined={false}
                        onChange={lng => {
                            i18n.changeLanguage(lng);
                            localStorage.setItem("lng", lng!);
                        }}
                        sizing="fit-to-values"
                        value={i18n.language}
                        values={[
                            {key: "fr", label: "FR"},
                            {key: "en", label: "EN"}
                        ]}
                    />
                    <Switch
                        iconOff="light_mode"
                        iconOn="dark_mode"
                        onChange={() => (colorScheme.dark = !colorScheme.dark)}
                        value={colorScheme.dark}
                    />
                </HeaderItem>
            </HeaderTopRow>
            {children}
        </HeaderScrolling>
    ));
}
