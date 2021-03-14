export interface OrderData {
    id: number,
    address: string,
    date: string,
    items: OrderItemData[],
}

export interface OrderItemData {
    id: number,
    name: string,
    price: number,
    qty: number,
    imgLink: string;
}
