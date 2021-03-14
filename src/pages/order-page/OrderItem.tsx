import { ChangeEvent, MouseEvent } from 'react'
import { OrderItemData } from '../../interfaces/OrderData'
import upArrow from '../../images/up-arrow.svg'
import downArrow from '../../images/down-arrow.svg'
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import close from '../../images/close.svg';

interface OrderItemProps {
    item: OrderItemData, 
    setItemQty:(id: number, qty: number) => void ,
    deleteItem:(id: number) => void,
    moveItem:(id: number, direction: string) => void,
}

function OrderItem({ item, setItemQty, deleteItem, moveItem }:  OrderItemProps ) {
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
                <div className="move-button-container">
                    <button onClick={() => moveItem(item.id, 'UP')}>
                        <img className="button-icon" src={upArrow} alt="up-arrow"></img>    
                    </button>
                    <button onClick={() => moveItem(item.id, 'DOWN')}>
                        <img className="button-icon" src={downArrow} alt="down-arrow"></img> 
                    </button>
                </div>

                <div className="item-image-container">
                    <img className="item-image" src={item.imgLink} alt={item.name}></img>
                </div>

                <span className="item-name">{item.name} </span>
                <span className="item-price">Цена (1): <br></br>{item.price} р. </span>
                
                <div className="qty-control">
                    <button onClick={() => setItemQty(item.id, item.qty - 1)} disabled={item.qty <= 1}>
                        <img className="button-icon" src={minus} alt="minus"></img>        
                    </button>
                    <input type="number" value={item.qty} onChange={handleInput} onBlur={handleZeros}></input>
                    <button onClick={() => setItemQty(item.id, item.qty + 1)}>
                        <img className="button-icon" src={plus} alt="plus"></img>  
                    </button>
                </div>

                <span className="item-total">{item.qty * item.price} р.</span>

                <button onClick={toggleDeleteConfirm}>
                    <img className="button-icon" src={close} alt="close"></img>  
                </button>
            </div>
            <div className="delete-confirmation hidden">
                <span>Удалить товар "{item.name}"?</span>
                <div className="button-container">
                    <button onClick={() => deleteItem(item.id)}>да</button>
                    <button onClick={toggleDeleteConfirm}>нет</button>
                </div>
            </div>
        </div >
    )
}

export default OrderItem;