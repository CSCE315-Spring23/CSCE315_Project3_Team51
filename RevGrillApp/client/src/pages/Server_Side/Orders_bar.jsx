import React from 'react';
import { useEffect, useState } from 'react';


export default function OrdersBar() {
    const [orders, setOrders] = useState('No data - Orders')


    function getRunningOrders() {
        fetch("http://localhost:9000/orders")
            .then(r => r.text())
            .then(resp => {
                setOrders(resp)
            });
    }

    // fetch the information for the item given the number
    useEffect(() => {
        getRunningOrders()
    }, []);

    return (

        <div className="order_bar">
            <h2> 🧾 CURRENT ORDERS</h2>
            <div dangerouslySetInnerHTML={ mappedOrders }></div>
            {/* <p>{orders.stringify}</p> */}
        </div>
    );
}