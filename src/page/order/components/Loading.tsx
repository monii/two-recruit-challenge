import styled from "styled-components";

const Loading = () => {
  return (
    <Style.LoadingContainer>
      <Style.TextWrapper>
        <p>목록을 </p>
        <p>불러오고 있습니다.</p>
      </Style.TextWrapper>
    </Style.LoadingContainer>
  );
};

export default Loading;

const Style = {
  LoadingContainer: styled.div`
    position: relative;
    width: 100%; 
    height: calc(100vh - 170px); 
  `,
  TextWrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 221px;
    height: 45px;
    text-align: center;
  `,
};
