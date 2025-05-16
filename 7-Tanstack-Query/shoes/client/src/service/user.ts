import { useQuery } from "@tanstack/react-query";
import { authService } from "./auth";

const useUser = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => authService.getMe(),
    select: (data) => data.data.user,
    retry: false,
  });

  return { isLoading, error, user: data };
};

export default useUser;
