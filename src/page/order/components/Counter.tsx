import styled from "styled-components";

interface ItemCounter {
  currentCounter: number;
}

const Counter = ({ currentCounter }: ItemCounter) => {
  return (
    <Style.CounterContainer>
      <Style.CounterButton>-</Style.CounterButton>
      <Style.Text>{currentCounter}</Style.Text>
      <Style.CounterButton>+</Style.CounterButton>
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
