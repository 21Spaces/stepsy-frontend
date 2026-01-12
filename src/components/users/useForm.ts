import { computed, ref } from "vue";
import { useUserService } from "../../services/users";
import { useQuery } from "@tanstack/vue-query";

export const useForm = () => {
  const service = useUserService();

  const selectedUsername = ref<string | null>(null);

  const users = useQuery({
    queryKey: ["users"],
    queryFn: () => service.testOnUser(),
  });

  const { data: focusedUser, isLoading } = useQuery({
    queryKey: computed(() => ["user", selectedUsername.value]),
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return service.findByName(selectedUsername.value!);
    },
    enabled: computed(() => selectedUsername.value !== null),
  });

  const onUser = (username: string) => {
    selectedUsername.value = username;
  };

  return {
    focusedUser,
    isLoading,
    users,
    onUser,
  };
};
