import { OrderItemData } from '../../interfaces/OrderData'

function OrderItem({item}:{item: OrderItemData}) {
    return(
        <div className="order-item">
            <span>{item.name} </span>
            <span>{item.price} </span>
            <span>{item.qty} </span>
        </div>
    )
}

export default OrderItem;