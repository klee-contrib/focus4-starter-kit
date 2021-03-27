import {
    HeaderActions,
    HeaderBarRight,
    HeaderContent,
    HeaderScrolling,
    HeaderSummary,
    HeaderTopRow
} from "@focus4/layout";
import {observable} from "mobx";
import {useObserver} from "mobx-react";
import {ReactElement} from "react";

const headerStore = observable({
    canDeploy: true
});

export function Header({
    summary,
    cartridge,
    barRight
}: {
    summary: ReactElement;
    cartridge: ReactElement;
    barRight?: ReactElement;
}) {
    return useObserver(() => (
        <HeaderScrolling canDeploy={headerStore.canDeploy}>
            <HeaderTopRow>
                <HeaderSummary>{summary}</HeaderSummary>
                <HeaderBarRight>{barRight}</HeaderBarRight>
            </HeaderTopRow>
            <HeaderContent>{cartridge}</HeaderContent>
            <HeaderActions
                primary={[
                    {
                        onClick: () => (headerStore.canDeploy = !headerStore.canDeploy),
                        icon: "radio_button_checked",
                        tooltip: "Toggle le canDeploy"
                    }
                ]}
            />
        </HeaderScrolling>
    ));
}
