import { create } from "zustand";

interface Order {
  id: string;
  price: number;
  count: number;
}

interface Orders {
  orders: Order[];
  totalAmount: number;
  totalItemCount: number;
  increase: (orderItem: Order) => void;
  decrease: (orderItem: Order) => void;
  reset: () => void;
}

const initialOrders = {
  orders: [],
  totalAmount: 0,
  totalItemCount: 0,
};

const useOrdersStore = create<Orders>((set) => ({
  ...initialOrders,
  increase: (newOrder: Order) =>
    set((state) => {
      const orderIndex = state.orders.findIndex(
        (order) => order.id === newOrder.id
      );

      if (orderIndex === -1) {
        return {
          orders: [...state.orders, { ...newOrder, count: 1 }],
          totalItemCount: state.totalItemCount + 1,
          totalAmount: state.totalAmount + newOrder.price,
        };
      } else {
        const updatedOrders = [...state.orders];
        updatedOrders[orderIndex].count += 1;
        return {
          orders: updatedOrders,
          totalItemCount: state.totalItemCount + 1,
          totalAmount: state.totalAmount + newOrder.price,
        };
      }
    }),
  decrease: (newOrder: Order) =>
    set((state) => {
      const orderIndex = state.orders.findIndex(
        (order) => order.id === newOrder.id
      );

      if (orderIndex === -1) {
        return state;
      } else {
        let updatedOrders = [...state.orders];
        updatedOrders[orderIndex].count -= 1;
        if (updatedOrders[orderIndex].count === 0) {
          const frontUpdateOrders = updatedOrders.slice(0, orderIndex);
          const backUpdateOrders = updatedOrders.slice(orderIndex + 1);
          updatedOrders = [...frontUpdateOrders, ...backUpdateOrders];
        }

        return {
          orders: updatedOrders,
          totalItemCount:
            state.totalItemCount > 0 ? state.totalItemCount - 1 : 0,
          totalAmount:
            state.totalAmount > newOrder.price
              ? state.totalAmount - newOrder.price
              : 0,
        };
      }
    }),
  reset: () => set(() => initialOrders),
}));

export default useOrdersStore;
