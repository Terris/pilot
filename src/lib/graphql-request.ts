import { GraphQLClient } from "graphql-request";
import { getValidAccessToken } from "./realm";

const accessToken = async () => await getValidAccessToken();

export const gqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_API || "",
  {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }
);
