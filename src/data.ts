import { OrderData } from './interfaces/OrderData'

export const order: OrderData = {
    id: 132,
    address: "СПб, пр. Ленина, д.3, кв.1",
    date: new Date().toLocaleDateString("ru"),
    items: [
        { id: 1, name: "Яблоко", price: 1, qty: 1, imgLink: '/images/apple_small.png' },
        { id: 2, name: "Грейпфрут", price: 2, qty: 2, imgLink: '/images/grapefruit_small.png'},
        { id: 3, name: "Апельсин", price: 3, qty: 3, imgLink: '/images/orange_small.gif'},
        { id: 4, name: "Ананас", price: 3, qty: 3, imgLink: '/images/pineapple_small.jpg'},
        { id: 5, name: "Гранат", price: 3, qty: 3, imgLink: '/images/pomegranate_small.jpg'},
    ],
}