import styled from "styled-components";

interface ContianerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContianerProps) => {
  return <Style.Container>{children}</Style.Container>;
};

export default Container;

const Style = {
  Container: styled.div`
    max-width: 480px;
    margin: 0 auto;
    background-color: #fff;
    width: auto;
    position: relative;
    height: 100vh;
    min-height: 100%;
    box-shadow: 0 0 20px #0000000d;
  `,
};
