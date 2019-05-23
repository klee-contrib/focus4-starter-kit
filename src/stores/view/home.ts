import {ViewStore} from "@focus4/core";

export const homeViewStore = new ViewStore({
    beforeEnter: ({id}) => {
        if (!id) {
            return {redirect: {id: "1"}};
        }
        return undefined;
    },
    prefix: "home" as "home",
    view: {
        id: "" as string,
        page: "" as "list"
    }
});
