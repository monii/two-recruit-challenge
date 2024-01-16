import { useEffect } from "react";
import Header from "../../components/header/Header";
import OrderButton from "./components/OrderButton";
import itemApi from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "./components/Loading";
import Items from "./components/Items";
import { ResponseItemDTO } from "../../types/item";

const Order = () => {
  const getItemsWQuery = useQuery<ResponseItemDTO[]>({
    queryKey: ["getItemsWQuery"],
    queryFn: itemApi.getItems,
  });

  return (
    <div>
      <Header />
      {getItemsWQuery.isLoading ? (
        <Loading />
      ) : (
        getItemsWQuery.isSuccess && <Items items={getItemsWQuery.data} />
      )}
      <OrderButton />
    </div>
  );
};

export default Order;
