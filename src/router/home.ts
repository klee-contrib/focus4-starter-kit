import {param} from "@focus4/core";
export const home = param("id", p => p.number(true), {list: {}});
