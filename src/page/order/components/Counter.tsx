import styled from "styled-components";
import useOrdersStore from "../../../store/order";

interface ItemCounter {
  index: number;
  id: string;
  price: number;
}

const Counter = ({ id, price }: ItemCounter) => {
  const { orders, increase, decrease } = useOrdersStore();
  const currentItem = orders.find((item) => item.id === id);
  const count = currentItem ? currentItem.count : 0;

  const addItem = () => {
    count < 999
      ? increase({ id, price, count })
      : alert("주문할 수 있는 최대 수량은 999개 입니다.");
  };

  const minusItem = () => {
    count > 0
      ? decrease({ id, price, count })
      : alert("수량은 음수가 될 수 없습니다.");
  };

  return (
    <Style.CounterContainer>
      <Style.CounterButton onClick={minusItem}>-</Style.CounterButton>
      <Style.Text>{count}</Style.Text>
      <Style.CounterButton onClick={addItem}>+</Style.CounterButton>
    </Style.CounterContainer>
  );
};

export default Counter;

const Style = {
  CounterContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,
  CounterButton: styled.button`
    width: 19px;
    height: 22px;
    flex-shrink: 0;
  `,
  Text: styled.p`
    width: 19px;
    height: 22px;
    flex-shrink: 0;
  `,
};
