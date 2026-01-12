import { useUserRepository } from "../../repositories/users";

export const useUserService = () => {
  const repository = useUserRepository();

  const testOnUser = () => {
    return repository.users();
  };

  const findByName = (name: string) => repository.userByName(name);

  return {
    testOnUser,
    findByName,
  };
};
