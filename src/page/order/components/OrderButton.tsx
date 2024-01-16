import styled from "styled-components";

const OrderButton = () => {
  return (
    <Style.OrderButtonContainer>
      <Style.OrderButtonWrapper>
        <Style.OrderInfoSection>
          <Style.Text color="#000">총 수량: 0개</Style.Text>
          <Style.Text color="#000">총 가격: 0원</Style.Text>
        </Style.OrderInfoSection>
        <Style.ButtonSection>
          <Style.OrderButton>
            <Style.Text color="#FFF">주문하기</Style.Text>
          </Style.OrderButton>
        </Style.ButtonSection>
      </Style.OrderButtonWrapper>
    </Style.OrderButtonContainer>
  );
};

export default OrderButton;

const Style = {
  OrderButtonContainer: styled.div`
    position: fixed;
    max-width: 480px;
    width: 350px;
    height: 130px;
    padding: 20px;
    bottom: 0px;
    border-radius: 20px 20px 0px 0px;
    background: #fff;
    box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  `,
  OrderButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,
  OrderInfoSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,
  ButtonSection: styled.section``,
  OrderButton: styled.button`
    width: 100%;
    height: 47.919px;
    flex-shrink: 0;
    background: #c1c1c1;
  `,
  Text: styled.p<{ color: string }>`
    color: ${(props) => props.color};

    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
};
