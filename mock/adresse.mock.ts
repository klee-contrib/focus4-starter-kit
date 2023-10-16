import _ from "lodash";
import {defineMock} from "vite-plugin-mock-dev-server";

export default defineMock({
    url: "/api/adresses",
    body: async ({query}) => {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query.query}&limit=10`);
        const json = await response.json();
        return (
            _.uniq<string>(json.features?.map((adr: any) => adr.properties.label)).map(label => ({
                key: label,
                label
            })) ?? []
        );
    }
});
