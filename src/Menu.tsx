import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <h1>react-test-apps</h1>
            <ul>
                <li><Link to="/order-details">Order details page</Link></li>
            </ul>
        </div>
    )
}

export default Menu;