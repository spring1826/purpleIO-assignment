import purpleAxios from "./instance";

export const fetchStores = async () => {
  return (await purpleAxios.get("stores")).data;
};
