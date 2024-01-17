import styled from "styled-components";
import { ResponseItemDTO } from "../../../types/item";
import Counter from "./Counter";
import { convertToCurrency } from "../../../utils/utils";
import Chip from "./Chip";
import useOrdersStore from "../../../store/order";
import { useState } from "react";

interface ItemsProps {
  items: ResponseItemDTO[];
}

const Items = ({ items }: ItemsProps) => {
  const { orders } = useOrdersStore();

  const changeItemBackgroun = (id: string): boolean => {
    const currentItem = orders.find((item) => item.id === id);
    const count = currentItem ? currentItem.count : 0;
    return count !== 0;
  };

  return (
    <Style.ItemsContainer>
      {items.map((item, index) => (
        <Style.ItemContainer key={item.id} isAddedItem={changeItemBackgroun(item.id)}>
          <Style.ItemWrapper>
            <Style.ImageSection />
            <Style.ItemSection>
              <Style.NameWrapper>
                <p>{item.name}</p>
                {item.event === 1 && <Chip label={"이벤트"} />}
              </Style.NameWrapper>
              <Style.PriceWrapper>
                <Counter index={index} id={item.id} price={item.price} />
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
  ItemContainer: styled.div<{isAddedItem:boolean}>`
    padding: 9px 12px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background:${props => props.isAddedItem ? "rgba(247, 90, 47, 0.10)" : "#fff"}
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
  NameWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  PriceWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
