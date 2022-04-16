import type { NextPage } from "next";
import { useStores } from "apis/hooks";
import StoreTemplate from "templates/StoreTemplate/StoreTemplate";
import { Loading } from "components/Loading/Loading";

const Store: NextPage = () => {
  const { data, isLoading, error } = useStores();

  return isLoading ? <Loading /> : <StoreTemplate stores={data} />;
};

export default Store;
