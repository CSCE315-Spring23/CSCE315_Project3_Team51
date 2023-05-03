import React from 'react';
import ItemInOrder from './Item_inOrder';
import './server-side.css'

/**
    Represents a component for displaying and managing the current order.
    @author Casey @peicasey

    @param {number} order_num - The order number.
    @return {JSX.Element} - A JSX Element representing the component.
*/
export default function CurrentOrder(order_num) {

    
    return (
        <div>
            <h3 style={{marginLeft:'30px',}}>Current Order:</h3>
            <div className="curOrder_box">
                Add first item!
                <ItemInOrder></ItemInOrder>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginRight:'20px', }}>
                <div></div>
                <div style={{ display:'flex', justifyContent:'space-between', }}>
                <button>
                    <span class="material-symbols-outlined">send</span>
                    <div style={{width:'5px'}}></div>
                    submit
                </button>
                <button>
                    <span class="material-symbols-outlined">cancel</span>
                    <div style={{width:'5px'}}></div>
                    cancel
                </button>
                </div>
            </div>
        </div>
    )
}