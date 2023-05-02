import React from 'react';
import { useEffect, useState } from 'react';


export default function OrdersBar() {

    var Orders = [];

    const Order = {
        "order_number":-1,
        "total_price": -99.99,
        "tip": -99.99,
        "order_taker":-1,
        "items_ordered":[0],
        "modifications":["no modifications"],
        "order_status":"Not Sent",
        "current_day":false,
        "order_time":"2023-03-22T21:22:53.326Z"
    };

    Orders.push(Order);

    const [orders, setOrders] = useState(Orders)

    function getRunningOrders() {
        fetch("http://localhost:9000/orders")
            .then(r => r.json)
            .then(resp => {
                setOrders(resp)
            });
    }

    // fetch the information for the item given the number
    useEffect(() => {
        getRunningOrders()
    }, []);


    const Order_Tile = order => 
    `<div id="order_tile">
        <h4>Order: ${order.order_number}</h4>
        <p>${order.order_status}</p>
    </div>`
    ;

    const mappedOrders = { __html: Orders.map(order => Order_Tile(order)).join('') };


    return (


        <div className="order_bar">
            <h2> <span class="material-symbols-outlined">receipt_long</span> CURRENT ORDERS</h2>
            <div dangerouslySetInnerHTML={ mappedOrders }></div>
            
        </div>
    );
}