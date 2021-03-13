import { Order } from './interfaces/Order'

export const order: Order = {
    id: 132,
    address: "СПб, пр. Ленина, д.3, кв.1",
    date: new Date().toLocaleDateString("ru"),
    items: [
        { id: 1, name: "Товар 1", price: 1, qty: 1 },
        { id: 2, name: "Товар 2", price: 2, qty: 2 },
        { id: 3, name: "Товар 3", price: 3, qty: 3 },
    ],
}