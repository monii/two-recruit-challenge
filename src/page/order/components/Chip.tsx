import styled from "styled-components";

interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return (
    <Style.Chip>
      <Style.Text>{label}</Style.Text>
    </Style.Chip>
  );
};

export default Chip;

const Style = {
  Chip: styled.div`
    width: 53px;
    padding: 4px 3px;
    border-radius: 10px;
    background: #f75a2f;
  `,
  Text: styled.p`
    color: #fff;
    text-align: center;
    font-size: 13px;
  `,
};
