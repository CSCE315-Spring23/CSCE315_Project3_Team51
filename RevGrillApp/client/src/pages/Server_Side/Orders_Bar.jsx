import React from 'react';
import { useEffect, useState } from 'react';


/**
*    A component that displays a list of orders retrieved from an external source.
*    @author Casey @peicasey
*
*    @returns The `OrdersBar` component.
*/
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

    const [orders, setOrders] = useState(Orders);
    const [ordersText, setOrdersText] = useState("no data :|")

    
    function getRunningOrders() {
        fetch("http://revgrill-app.onrender.com/server_side/get_orders")
        .then(r => r.text())
        .then(resp => {
            setOrders(JSON.parse(resp))
        });
    }

    function getOrders() {
        fetch("http://revgrill-app.onrender.com/server_side/get_orders")
        .then(r => r.text())
        .then(resp => {
            setOrdersText(resp)
        });
    }

    // fetch the information for the item given the number
    useEffect(() => {
        getRunningOrders()
    }, []);

    useEffect(() => {
        getOrders()
    }, []);


    const Order_Tile = order => 
    `<div id="order_tile">
        <div style="line-height:0px; text-align:right;">
            <h4>Order: ${order.order_number}</h4>
            <p style="color:var(--custom-primary-light); padding-bottom:5px;">${order.order_status}</p>
            <p>$${order.total_price}</p>
        </div>
        <div style="text-align:left;">
            <p>🕒 ${order.order_time}</p>
            <p>🍔 Items Ordered: ${order.items_ordered}</p>
        </div>
    </div>`
    ;

    // const orderText = ordersText;

    const mappedOrders = { __html: orders.map(order => Order_Tile(order)).join('') };

    return (
        <div className="order_bar">
            <h2> 🧾 CURRENT ORDERS</h2>
            <div dangerouslySetInnerHTML={ mappedOrders }></div>
            <div>{ordersText}</div>
        </div>
    );
}