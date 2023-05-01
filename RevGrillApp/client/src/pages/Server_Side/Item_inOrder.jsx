import React from 'react';

export default function ItemInOrder() {

    return (
        <div style={{ display:'flex', justifyContent:'space-between', backgroundColor:'var(--custom-extra-light)', }}>
            <div style={{ textAlign:'right', }}>
                item name :D
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', }}>
                <span class="material-symbols-outlined">add_box</span>
                <div style={{width:'10px'}}></div>
                <span class="material-symbols-outlined">do_not_disturb_on</span>
            </div>
        </div>
    )
}