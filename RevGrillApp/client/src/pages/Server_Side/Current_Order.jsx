import React from 'react';
import './server-side.css'

export default function CurrentOrder(order_num) {

    
    return (
        <div>
            <h3 style={{marginLeft:'30px',}}>Current Order:</h3>
            <div className="curOrder_box">
                Add first item!
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