export interface Order {
    id: number,
    address: string,
    date: string,
    items: OrderItem[],
}

export interface OrderItem {
    id: number,
    name: string,
    price: number,
    qty: number,
}
