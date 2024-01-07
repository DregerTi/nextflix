import {ApolloClient, createHttpLink, from, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    watchQuery: {
        fetchPolicy: 'no-cache',
    },
    query: {
        fetchPolicy: 'no-cache',
    },
});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({message, locations, path}) =>
            console.log(
                `[GraphQL Error]: 
                    Message: ${message}, 
                    Location: ${JSON.stringify(
                    locations
                )}, Path: ${path}`
            )
        );

    if (networkError)
        console.log(`[Network Error]: ${networkError}`);
});

const httpLink = createHttpLink({
    fetch,
    uri: process.env.CONTENTFUL_GRAPHQL_URI,
    headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
});

export default client;