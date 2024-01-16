export interface Item {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

export interface RequestItemDTO {
    items: Item[]
}
