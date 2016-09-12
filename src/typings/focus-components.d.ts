/* tslint:disable:class-name */

declare module 'focus-components/application/confirmation-popin' {
    export class component extends React.Component<{
        confirmHandler: () => void
    }, {}> {
        toggleOpen(): void
    }
}

declare module 'focus-components/common/field' {
    export class component extends React.Component<any, {}> {}
}

declare module 'focus-components/components' {

    export class Button extends React.Component<{
        color?: 'primary' | 'accent',
        className?: string,
        icon?: string,
        label?: string,
        shape?: 'raised' | 'fab' | 'icon' | 'mini-fab' | null,
        style?: React.CSSProperties,
        type?: 'button' | 'submit',
        handleOnClick: (e: React.SyntheticEvent<any>) => void,
        disabled?: boolean,
        iconLibrary?: 'material' | 'font-awesome' | 'font-custom'
    }, {}> {}

    export class ButtonBack extends React.Component<{}, {}> {}

    export class ButtonBackToTop extends React.Component<{}, {}> {}

    export class DraggableIframe extends React.Component<{
        iframeUrl: string;
        width: number;
        height: number;
        title: string;
        toggleFunctionName?: string;
        queryUrl?: string[]
    }, {
        xPos?: number;
        yPos?: number;
        xElem?: number;
        yElem?: number;
        selected?: HTMLElement;
    }> {
        dragInit: (e: MouseEvent) => void;
        moveElem: (e: MouseEvent) => void;
        destroy: (e: MouseEvent) => void;
        helpFrame: HTMLIFrameElement;
    }

    export class Icon extends React.Component<{
        name: string,
        style?: React.CSSProperties,
        onClick?: (e: React.MouseEvent<any>) => void,
        library?: 'material' | 'font-awesome' | 'font-custom'
    }, {}> {}

    export class Layout extends React.Component<{
        MenuLeft?: React.ComponentClass<any>,
        LoadingBar?: React.ComponentClass<any>
    }, {}> {}

    export interface MenuItem {
        icon: string;
        iconLibrary?: 'font-custom';
        route: string;
        className?: string;
        name?: string;
    }

    export class MenuLeft extends React.Component<{
        items: MenuItem[];
        handleBrandClick?: () => void;
        navigate?: Function;
        MenuItems: (props: {items: MenuItem[]}) => JSX.Element
    }, {}> {
        _renderMenuItems: () => JSX.Element[];
        _handleBrandClick(): void;
    }

    export class Panel extends React.Component<{
        title?: string,
        showHelp?: boolean,
        blockName?: string,
        actions?: () => React.ReactElement<{}>,
        className?: string
    }, {}> {}

    export class ScrollspyContainer extends React.Component<{
        gridMenuSize?: number,
        gridContentSize?: number
    }, {}> {}

    export class Role extends React.Component<{
        hasOne?: string[],
        hasAll?: string[],
        emptyBlock: React.ReactElement<{}>
    }, {}> {}

    export function TopicDisplayer(props: {
        topicClickAction: () => void,
        topicList: {}
    }): JSX.Element
}

declare module 'focus-components/components/input' {
    export class Checkbox extends React.Component<{
        name?: string,
        onChange: () => void,
        value: boolean
    }, {}> {}

    export class Date extends React.Component<{
        locale: string
    }, {}> {
        getValue(): string
    }

    export class Radio extends React.Component<{
        label: string;
        name?: string;
        value?: boolean;
        onChange?: (checked: boolean) => void;
    }, {}> {
        getValue(): any;
    }

    export class Select extends React.Component<{
        value: string | number,
        values: {}[],
        labelKey?: string,
        onChange?: (...args: any[]) => void
    }, {}> {}

    export class SelectRadio extends React.Component<{
        value?: string | number,
        values?: {}[],
        labelKey?: string,
        onChange?: (...args: any[]) => void
    }, {}> {}

    export class Textarea extends React.Component<any, {}> {}
}

declare module 'focus-components/list/action-bar' {
    export class component extends React.Component<{
        facetClickAction: any,
        facetList: any,
        groupAction: any,
        groupableColumnList: any,
        groupLabelPrefix: any,
        groupSelectedKey: any,
        hasGrouping: any,
        isSelection: any,
        operationList: any,
        orderAction: any,
        orderSelected: any,
        orderableColumnList: any,
        selectionAction: any,
        selectionStatus: any,
    }, {}> {}
}

declare module 'focus-components/list/action-contextual' {
    export class component extends React.Component<{
        operationList: {
            label?: string;
            action: (data: {}) => void;
            style: {shape?: 'icon' | 'flat' | 'raised'};
            icon?: string;
            priority: number;
        }[],
        operationParam?: {}
    }, {}> {}
}

declare module 'focus-components/list/timeline/list' {
    export class component extends React.Component<{}, {}> {}
}
