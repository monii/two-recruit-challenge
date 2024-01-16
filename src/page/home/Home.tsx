import styled from "styled-components";
import LgLogo from "../../assets/lg-logo-black.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Style.HomeContainer>
      <Style.LogoContainer>
        <Style.LogoWrapper>
          <img src={LgLogo} alt="반장창고" />
        </Style.LogoWrapper>
        <Style.ButtonWrapper>
          <Link to={'/order'}>
            <Style.ButtonText>주문하러가기</Style.ButtonText>
          </Link>
        </Style.ButtonWrapper>
      </Style.LogoContainer>
    </Style.HomeContainer>
  );
};

export default Home;

const Style = {
  HomeContainer: styled.div`
    background-color: #000000;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LogoContainer: styled.div``,
  LogoWrapper: styled.div`
    padding-bottom: 41px;
  `,
  ButtonWrapper: styled.button`
    width: 172px;
    height: 88px;
    padding: 22px 11px;

    flex-shrink: 0;
    border-radius: 20px;
    background: #fff;
  `,
  ButtonText: styled.p`
    width: 150px;
    height: 45px;
    color: #000;

    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
};
