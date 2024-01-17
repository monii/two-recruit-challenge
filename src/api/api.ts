import axios from "axios";
import { ResponseItemDTO } from "../types/item";

const localAxios = axios.create({
  baseURL: "http://localhost:3001",
});

const itemApi = {
  getItems: async (): Promise<ResponseItemDTO[]> => {
    // 로딩중을 표시 하기위해서 setTimeout 사용
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const { data } = await localAxios.get("/items");
    return data;
  },
};

export default itemApi;
