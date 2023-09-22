import {defineMock} from "vite-plugin-mock-dev-server";

import utilisateurs from "./utilisateurs";

export default defineMock({
    url: "/api/utilisateurs/:id",
    method: "DELETE",
    delay: 100,
    body: ({params: {id}}) => (utilisateurs.value = utilisateurs.value.filter(uti => uti.id !== +id))
});
