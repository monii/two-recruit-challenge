import styled from "styled-components";
import CheckFilled from "../../assets/CheckFilled.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useOrdersStore from "../../store/order";

const Complete = () => {
    const navigate = useNavigate();
    const {reset} = useOrdersStore();

    useEffect(()=>{
        reset();
        setTimeout(()=>navigate('/order', {replace:true}),3000)
    },[])
    
  return (
    <Style.CompleteContainer>
      <Style.CompleteWrapper>
        <Style.ImageSection>
          <div>
            <img src={CheckFilled} alt={"주문완료"} />
          </div>
        </Style.ImageSection>
        <Style.TextSection>
          <p>주문이 완료되었습니다.</p>
        </Style.TextSection>
      </Style.CompleteWrapper>
    </Style.CompleteContainer>
  );
};

export default Complete;

const Style = {
  CompleteContainer: styled.div`
    position: relative;
    height: 100vh;
  `,
  CompleteWrapper: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -50%);
    gap:12px;
  `,
  ImageSection: styled.section``,
  TextSection: styled.section``,
};
