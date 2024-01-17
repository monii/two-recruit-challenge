import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useOrdersStore from "../../store/order";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { reset } = useOrdersStore();

  useEffect(() => {
    reset();
    setTimeout(() => navigate("/order", { replace: true }), 3000);
  }, []);

  return (
    <Style.ErrorContainer>
      <Style.ErrorWrapper>
        <p>주문에 실패하였습니다.</p>
        <p>다시 시도해주세요.</p>
      </Style.ErrorWrapper>
    </Style.ErrorContainer>
  );
};

export default ErrorPage;

const Style = {
  ErrorContainer: styled.div`
    position: relative;
    height: 100vh;
  `,
  ErrorWrapper: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -50%);
    gap: 12px;
  `,
};
