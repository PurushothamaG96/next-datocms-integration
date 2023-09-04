import { GraphQLClient } from "graphql-request";

export default async function cmsdata({query,includeDrafts=false }:Arg) {
  const endPoints = includeDrafts?"https://graphql.datocms.com/preview":"https://graphql.datocms.com/";
  const grapgqlClient = new GraphQLClient(endPoints, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const course:HomeQuery = await grapgqlClient.request(query);
  return course;
}
