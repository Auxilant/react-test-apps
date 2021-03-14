import { OrderItemData } from '../../interfaces/OrderData'

function OrderItem({ item, setItemQty }: { item: OrderItemData, setItemQty:(id: number, qty: number) => void }) {
    return (
        <div className="order-item-container">
            <div className="order-item">
                <span>{item.name} </span>
                <span>{item.price} </span>
                <button onClick={() => setItemQty(item.id, item.qty - 1)}>-</button>
                <span>{item.qty} </span>
                <button onClick={() => setItemQty(item.id, item.qty + 1)}>+</button>
                <button>x</button>
            </div>
        </div >

    )
}

export default OrderItem;