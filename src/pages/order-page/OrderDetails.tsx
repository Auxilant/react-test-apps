import { useState } from 'react'
import { OrderData } from '../../interfaces/OrderData'
import './OrderDetails.scss'
import OrderItem from './OrderItem'

function OrderDetails({orderData}: {orderData: OrderData}) {
    const [items, setItems] = useState(orderData.items);

    const setItemQty = (id: number, qty: number) => {
        const newItems = items.map(item => {
            if (item.id === id) 
                return {...item, qty};
            else 
                return item;
        })
        setItems(newItems);
    }

    const deleteItem = (id:number) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    const moveItem = (id:number, direction:string) => {
        const index = items.findIndex(item => item.id === id);
        const newItems = items.slice();
        const element = newItems[index];
        if (direction === 'UP' && index > 0) {
            newItems.splice(index, 1);
            newItems.splice(index - 1, 0, element);
        }
        else if (direction === 'DOWN' && index < items.length - 1) {
            newItems.splice(index, 1);
            newItems.splice(index + 1, 0, element);
        }
        setItems(newItems);
    }

    const total = items.reduce(
        (sum, item) => sum + item.qty * item.price, 0
    );

    return (
        <div className="order-details">
            <h2>Заказ #{orderData.id}</h2>
            <div className="order-basic-info">
                <span>Адрес: {orderData.address}</span>
                <span>Дата: {orderData.date}</span>
            </div>
            <h2>Товары:</h2>
            <div className="order-items">
                {items.map (item => (
                    <OrderItem key={item.id} item={item} setItemQty={setItemQty} deleteItem={deleteItem} moveItem={moveItem}/>
                ))}
            </div>
            <h3>Итого: {total} р.</h3>
        </div>
    )
}

export default OrderDetails;