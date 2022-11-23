import { useQuery } from "@tanstack/react-query";
import { getValidAccessToken } from "src/lib/realm";
import { gqlClient } from "src/lib/graphql-request";
import { graphql } from "src/gql/gql";
import Layout from "src/layouts/Layout";

const allProductsQueryDocument = graphql(/* GraphQL */ `
  query products {
    products {
      _id
      name
    }
  }
`);

const fetchProducts = async () => {
  const accessToken = await getValidAccessToken();
  gqlClient.setHeader("authorization", `Bearer ${accessToken}`);
  return await gqlClient.request(allProductsQueryDocument);
};

export default function ProductsPage() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  });

  return (
    <Layout pageTitle="Products">
      <h2>Products</h2>
      {isLoading && <p>Loading ...</p>}
      {error instanceof Error && <p>An error occured. {error.message}</p>}
      <div>
        {data && (
          <ul>
            {data?.products.map((product) => (
              <li key={product?._id}>{product?.name}</li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
