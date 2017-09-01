import {observable, observer, React} from "focus4";
import {HeaderActions, HeaderBarLeft, HeaderBarRight, HeaderContent, HeaderScrolling, HeaderSummary, HeaderTopRow} from "focus4/application";

import {router} from "../stores";
import {header} from "./home";

const headerStore = observable({
    canDeploy: true
});

export const Header = observer(() => (
    <HeaderScrolling canDeploy={headerStore.canDeploy}>
        <HeaderTopRow>
            <HeaderBarLeft>
            </HeaderBarLeft>
            <HeaderBarRight>
                {router.currentStore.prefix === "home" ?
                    header.barRight
                : null}
            </HeaderBarRight>
            <HeaderSummary>
                {router.currentStore.prefix === "home" ?
                    header.summary
                : <strong>Salut Focus V4</strong>}
            </HeaderSummary>
        </HeaderTopRow>
        <HeaderContent>
            {router.currentStore.prefix === "home" ?
                header.cartridge
            : <h2>Salut Focus V4</h2>}
        </HeaderContent>
        <HeaderActions
            primary={[{
                onClick: () => headerStore.canDeploy = !headerStore.canDeploy,
                icon: "radio_button_checked"
            }]}
        />
    </HeaderScrolling>
));
