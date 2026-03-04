import {defineMock} from "vite-plugin-mock-dev-server";

export default defineMock({
    url: "/api/adresses",
    body: async ({query: {query}}) => {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}&limit=10`);
        const json = await response.json();
        return (
            json.features?.map((adr: any) => ({
                key: `${adr.properties.housenumber ?? ""}||${adr.properties.street ?? ""}||${adr.properties.postcode ?? ""}||${adr.properties.city ?? ""}`,
                label: adr.properties.label
            })) ?? []
        );
    }
});
