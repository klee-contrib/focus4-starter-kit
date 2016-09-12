import {createClass} from "react";

export = (mixin: any) => ({mixin, component: createClass(mixin)});
