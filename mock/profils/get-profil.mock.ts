import {defineMock} from "vite-plugin-mock-dev-server";

import profils from "./profils";

export default defineMock({
    url: "/api/profils/:id",
    delay: 100,
    body: ({params: {id}}) => profils.value.find(pro => pro.id === +id)
});
