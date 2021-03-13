import { useReducer } from 'react'
import { OrderData } from '../../interfaces/OrderData'
import './OrderDetails.scss'
import OrderItem from './OrderItem'

function OrderDetails({orderData}: {orderData: OrderData}) {
    const updater = (state: OrderData, {id, qty}:{id: number, qty: number}) => {
        for (let item of state.items) {
            if (item.id === id) {
                item.qty = qty;
                break;
            }
        }
        console.log(state);
        return state;
    }

    const [order, updateOrder] = useReducer(updater, orderData);

    const total = order.items.reduce(
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
                {orderData.items.map (item => (
                    <OrderItem key={item.id} item={item}/>
                ))}
            </div>
            <h3>Итого: {total} р.</h3>
            <button onClick={() => updateOrder({id: 1, qty: 5})}>+</button>
        </div>
    )
}

export default OrderDetails;