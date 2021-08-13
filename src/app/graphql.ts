import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  url: process.env.REACT_APP_API_URL as any,
  cache: new InMemoryCache(),
})