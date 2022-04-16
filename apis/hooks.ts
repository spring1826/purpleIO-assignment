import { useQuery } from "react-query";
import { fetchStores } from "./fetch";

export const useStores = () => {
  // TODO: error 처리
  const stores = useQuery(["stores"], () => fetchStores(), {
    staleTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return { ...stores };
};
