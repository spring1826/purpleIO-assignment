import { useQuery } from "react-query";
import { fetchStores } from "./fetch";

export const useStores = () => {
  // TODO: error 처리
  const stores = useQuery(["stores"], () => fetchStores(), {
    retryOnMount: false,
  });
  return { ...stores };
};
