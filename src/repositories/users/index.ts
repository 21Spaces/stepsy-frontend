import { apolloClient } from "../../plugins/apollo";
import { AllUsersDocument, ByNameDocument } from "../../gql/graphql";

export const useUserRepository = () => {
  const users = async () => {
    const result = await apolloClient.query({
      query: AllUsersDocument,
    });
    return result.data.users;
  };

  const userByName = async (name: string) => {
    const result = await apolloClient.query({
      query: ByNameDocument,
      variables: {
        name: name,
      },
    });
    return result.data.user;
  };

  return {
    users,
    userByName,
  };
};
