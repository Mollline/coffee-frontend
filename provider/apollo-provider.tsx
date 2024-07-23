"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface Props extends React.PropsWithChildren {}

const ApolloProviders = ({ children }: Props) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
  });
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};

export default ApolloProviders;
