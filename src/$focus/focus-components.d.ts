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

declare module 'focus-components/components/button' {
    export = class Button extends React.Component<{
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
}

declare module 'focus-components/components/button-back' {
    export = class ButtonBack extends React.Component<{}, {}> {}
}

declare module 'focus-components/components/button-back-to-top' {
    export = class ButtonBackToTop extends React.Component<{}, {}> {}
}

declare module 'focus-components/components/draggable-iframe' {
    export = class DraggableIframe extends React.Component<{
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
}
declare module 'focus-components/components/dropdown' {

    export = class Dropdown extends React.Component<{}, {}> {}
}
declare module 'focus-components/components/icon' {
    export = class Icon extends React.Component<{
        name: string,
        style?: React.CSSProperties,
        onClick?: (e: React.MouseEvent<any>) => void,
        library?: 'material' | 'font-awesome' | 'font-custom'
    }, {}> {}
}

declare module 'focus-components/components/menu-left' {
    interface MenuItem {
        icon: string;
        iconLibrary?: 'font-custom';
        route: string;
        className?: string;
        name?: string;
    }

    export = class MenuLeft extends React.Component<{
        items: MenuItem[];
        handleBrandClick?: () => void;
        navigate?: Function;
        MenuItems: (props: {items: MenuItem[]}) => JSX.Element
    }, {}> {
        _renderMenuItems: () => JSX.Element[];
        _handleBrandClick(): void;
    }
}

declare module 'focus-components/components/panel' {
    export = class Panel extends React.Component<{
        title?: string,
        showHelp?: boolean,
        blockName?: string,
        actions?: () => React.ReactElement<{}>,
        className?: string
    }, {}> {}
}

declare module 'focus-components/components/scrollspy-container' {
    export = class ScrollspyContainer extends React.Component<{
        gridMenuSize?: number,
        gridContentSize?: number
    }, {}> {}
}

declare module 'focus-components/components/role' {
    export = class Role extends React.Component<{
        hasOne?: string[],
        hasAll?: string[],
        emptyBlock: React.ReactElement<{}>
    }, {}> {}
}

declare module 'focus-components/components/topic-displayer' {
    function TopicDisplayer(props: {
        topicClickAction: () => void,
        topicList: {}
    }): JSX.Element

    export = TopicDisplayer;
}

declare module 'focus-components/components/input/checkbox' {
    export = class Checkbox extends React.Component<{
        name?: string,
        onChange: () => void,
        value: boolean
    }, {}> {}
}

declare module 'focus-components/components/input/date' {
    export = class Date extends React.Component<{
        locale: string
    }, {}> {
        getValue(): string
    }
}

declare module 'focus-components/components/input/radio' {
    export = class Radio extends React.Component<{
        label: string;
        name?: string;
        value?: boolean;
        onChange?: (checked: boolean) => void;
    }, {}> {
        getValue(): any;
    }
}

declare module 'focus-components/components/input/select' {
    export = class Select extends React.Component<{
        value: string | number,
        values: {}[],
        labelKey?: string,
        onChange?: (...args: any[]) => void
    }, {}> {}
}

declare module 'focus-components/components/input/select-radio' {
    export = class SelectRadio extends React.Component<{
        value?: string | number,
        values?: {}[],
        labelKey?: string,
        onChange?: (...args: any[]) => void
    }, {}> {}
}

declare module 'focus-components/components/input/text' {
    export = class InputText extends React.Component<{
        name: string;
        value?: string | number,
        onChange: (value: string) => void
    }, {}> {}
}

declare module 'focus-components/components/input/textarea' {
    export = class Textarea extends React.Component<any, {}> {}
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
