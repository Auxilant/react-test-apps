import { Order } from '../../interfaces/Order'
import './OrderDetails.scss'

function OrderDetails({orderData}: {orderData: Order}) {
    return (
        <div className="order-details">
            <h2>Заказ #{orderData.id}</h2>
            <div className="order-basic-info">
                <span>Адрес: {orderData.address}</span>
                <span>Дата: {orderData.date}</span>
            </div>
        </div>
    )
}

export default OrderDetails;