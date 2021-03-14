import { OrderData } from './interfaces/OrderData'

export const order: OrderData = {
    id: 132,
    address: "СПб, пр. Ленина, д.3, кв.1",
    date: new Date().toLocaleDateString("ru"),
    items: [
        { id: 1, name: "Ананас", price: 120, qty: 1, imgLink: '/images/pineapple_small.jpg'},
        { id: 2, name: "Гранат", price: 90, qty: 2, imgLink: '/images/pomegranate_small.jpg'},
        { id: 3, name: "Грейпфрут", price: 55, qty: 3, imgLink: '/images/grapefruit_small.png'},
        { id: 4, name: "Апельсин", price: 35, qty: 4, imgLink: '/images/orange_small.gif'},
        { id: 5, name: "Яблоко", price: 20, qty: 5, imgLink: '/images/apple_small.png' }, 
    ],
}