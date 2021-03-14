import { OrderData } from './interfaces/OrderData'

export const order: OrderData = {
    id: 132,
    address: "СПб, пр. Ленина, д.3, кв.1",
    date: new Date().toLocaleDateString("ru"),
    items: [
        { id: 1, name: "ТоварA", price: 1, qty: 1 },
        { id: 2, name: "ТоварB", price: 2, qty: 2 },
        { id: 3, name: "ТоварC", price: 3, qty: 3 },
    ],
}