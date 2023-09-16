import {CSSElement} from "@focus4/styling";

interface Button { _c7660: void }
interface Header { _c1afb: void }
interface Summary { _2aa7d: void }
interface User { _9d724: void }

export interface HeaderCss {
    button: CSSElement<Button>;
    header: CSSElement<Header>;
    summary: CSSElement<Summary>;
    user: CSSElement<User>;
}

declare const headerCss: HeaderCss;
export default headerCss;
