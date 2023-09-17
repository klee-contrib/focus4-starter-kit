import {defineMock} from "vite-plugin-mock-dev-server";

import utilisateurs from "./utilisateurs";

export default defineMock({
    url: "/api/utilisateurs/:id",
    delay: 100,
    body: ({params: {id}}) => utilisateurs.value.find(uti => uti.id === +id)
});
