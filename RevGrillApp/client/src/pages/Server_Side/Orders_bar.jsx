import React from 'react';
// import { useEffect, useState } from 'react';

// const [orders, setOrders] = useState('No data - Orders')

//     // fetch the information for the item given the number
//     fetch("http://localhost:9000/orders")
//       .then(r => r.text())
//       .then(resp => {
//         setOrders(resp)
//     });

export default function OrdersBar() {

    return (
        <div className="order_bar">
            <h2> <span class="material-symbols-outlined">receipt_long</span> ONGOING ORDERS</h2>
            {/* <p>{orders}</p> */}
        </div>
    )
}