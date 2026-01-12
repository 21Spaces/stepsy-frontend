import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APOLLO_URL,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
