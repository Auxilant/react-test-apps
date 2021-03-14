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
                    <OrderItem key={item.id} item={item} setItemQty={setItemQty}/>
                ))}
            </div>
            <h3>Итого: {total} р.</h3>
        </div>
    )
}

export default OrderDetails;