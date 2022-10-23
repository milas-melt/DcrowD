import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.thegraph.com/subgraphs/name/niceural/dcrowdv1',
});

export default client;