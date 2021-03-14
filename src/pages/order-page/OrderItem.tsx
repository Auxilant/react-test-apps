import { ChangeEvent, MouseEvent } from 'react';
import { OrderItemData } from '../../interfaces/OrderData'

function OrderItem(
    { item, setItemQty, deleteItem }:  {
        item: OrderItemData, 
        setItemQty:(id: number, qty: number) => void ,
        deleteItem:(id: number) => void} ) {
    const handleInput = (e: ChangeEvent) => {
        let element = e.target as HTMLInputElement;
        let newQty = +element.value;
        element.value = newQty.toString();
        setItemQty(item.id, newQty);
    }

    const handleZeros = (e: ChangeEvent) => {
        let element = e.target as HTMLInputElement;
        if (element.value === '0') {
            setItemQty(item.id, 1);
            element.value = '1';
        }
    }
    
    const toggleDeleteConfirm = (e: MouseEvent) => {
        const container = (e.target as HTMLElement).closest(".order-item-container");
        const itemInfo = container?.querySelector(".order-item-info");
        const confirmation = container?.querySelector(".delete-confirmation");
        itemInfo?.classList.toggle("hidden");
        confirmation?.classList.toggle("hidden");
    }

    return (
        <div className="order-item-container">
            <div className="order-item-info">
                <span>{item.name} </span>
                <span>{item.price} </span>
                <button onClick={() => setItemQty(item.id, item.qty - 1)} disabled={item.qty <= 1}>-</button>
                <input type="number" value={item.qty} onChange={handleInput} onBlur={handleZeros}></input>
                <button onClick={() => setItemQty(item.id, item.qty + 1)}>+</button>
                <button onClick={toggleDeleteConfirm}>x</button>
            </div>
            <div className="delete-confirmation hidden">
                <span>Удалить товар "{item.name}"?</span>
                <button onClick={() => deleteItem(item.id)}>да</button>
                <button onClick={toggleDeleteConfirm}>нет</button>
            </div>
        </div >

    )
}

export default OrderItem;