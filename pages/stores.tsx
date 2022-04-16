import type { NextPage } from "next";
import { useStores } from "apis/hooks";
import StoreTemplate from "templates/StoreTemplate/StoreTemplate";

const Store: NextPage = () => {
  const { data, isLoading, error } = useStores();

  return isLoading ? <div>isLoading</div> : <StoreTemplate stores={data} />;
};

export default Store;