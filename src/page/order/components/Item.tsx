import styled from "styled-components";
import { Item } from "../../../types/item";

interface ItemProps {
  item: Item;
}
const Item = ({ item }: ItemProps) => {
  return (
    <Style.ItemContainer>
      <Style.ItemWrapper>
        <Style.ImageSection />
        <Style.ItemSection>
          <Style.NameWrapper>{item.name}</Style.NameWrapper>
          <Style.PriceWrapper>
            
          </Style.PriceWrapper>
        </Style.ItemSection>
      </Style.ItemWrapper>
    </Style.ItemContainer>
  );
};

export default Item;

const Style = {
  ItemContainer: styled.div`
    padding: 9px 12px;
  `,
  ItemWrapper: styled.div`
    display: flex;
    gap: 8px;
  `,
  ImageSection: styled.section`
    width: 62px;
    height: 62px;
    background: #d9d9d9;
  `,
  ItemSection: styled.section`
    display: flex;
    flex-direction: colume;
  `,
  NameWrapper: styled.div``,
  PriceWrapper: styled.div`
    display: flex;
  `,
};
