import styled from "styled-components";
import { ResponseItemDTO } from "../../../types/item";
import Counter from "./Counter";
import { convertToCurrency } from "../../../utils/utils";

interface ItemsProps {
  items: ResponseItemDTO[];
}
const Items = ({ items }: ItemsProps) => {
  return (
    <Style.ItemsContainer>
      {items.map((item) => (
        <Style.ItemContainer>
          <Style.ItemWrapper>
            <Style.ImageSection />
            <Style.ItemSection>
              <Style.NameWrapper>{item.name}</Style.NameWrapper>
              <Style.PriceWrapper>
                <Counter currentCounter={0} />
                <p>{`${convertToCurrency(item.price, "en-US")}원`}</p>
              </Style.PriceWrapper>
            </Style.ItemSection>
          </Style.ItemWrapper>
        </Style.ItemContainer>
      ))}
    </Style.ItemsContainer>
  );
};

export default Items;

const Style = {
  ItemsContainer: styled.div`
    padding: 18px 24px;
    display: flex;
    gap: 18px;
    flex-direction: column;
    height: calc(100vh - 270px);
    overflow: auto;
  `,
  ItemContainer: styled.div`
    padding: 9px 12px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  `,
  ItemWrapper: styled.div`
    display: flex;
    gap: 12px;
  `,
  ImageSection: styled.section`
    width: 62px;
    height: 62px;
    background: #d9d9d9;
    flex-shrink: 0;
  `,
  ItemSection: styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  `,
  NameWrapper: styled.div``,
  PriceWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
