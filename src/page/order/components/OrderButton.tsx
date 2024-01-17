import styled from "styled-components";
import useOrdersStore from "../../../store/order";
import { convertToCurrency } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderButton = () => {
  const navigate = useNavigate();
  const { totalAmount, totalItemCount } = useOrdersStore();
  const [buttonText, setButtonText] = useState("주문하기");
  const pushOrder = () => {
    if (totalItemCount === 0)
      return alert("주문 아이템의 합계 수량이 0일 때는 주문할 수 없습니다.");
    setButtonText("로딩중...");
    setTimeout(() => {
      navigate("/complete");
    }, 1500);
  };

  return (
    <Style.OrderButtonContainer>
      <Style.OrderButtonWrapper>
        <Style.OrderInfoSection>
          <Style.Text color="#000">{`총 수량: ${totalItemCount}개`}</Style.Text>
          <Style.Text color="#000">{`총 가격: ${convertToCurrency(
            totalAmount,
            "en-US"
          )}원`}</Style.Text>
        </Style.OrderInfoSection>
        <Style.ButtonSection>
          <Style.OrderButton
            isReadyToOrder={totalItemCount > 0}
            onClick={pushOrder}
          >
            <Style.Text color="#FFF">{buttonText}</Style.Text>
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
  OrderButton: styled.button<{ isReadyToOrder: boolean }>`
    width: 100%;
    height: 47.919px;
    flex-shrink: 0;
    background: ${(props) => (props.isReadyToOrder ? "#000" : "#c1c1c1")};
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
