import styled from "styled-components";
import smLogo from "../../assets/sm-logo-black.svg";

const Header = () => {
  return (
    <Style.HeaderContainer>
      <Style.Header>
        <Style.LogoWrapper>
          <img src={smLogo} alt={"반장창고"} />
        </Style.LogoWrapper>
      </Style.Header>
    </Style.HeaderContainer>
  );
};

export default Header;

const Style = {
  HeaderContainer: styled.div`
    width: 100%;
    min-width: 350px;
    height: 57px;
    flex-shrink: 0;
    background-color: #000000;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
  `,
  LogoWrapper: styled.div`
    width: 94.118px;
    height: 32px;
    flex-shrink: 0;
  `,
};
