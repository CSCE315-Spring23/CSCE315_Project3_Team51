import React from 'react';

export default function ItemInOrder() {

    return (
        <div style={{ display:'flex', justifyContent:'space-between', backgroundColor:'var(--custom-extra-light)', }}>
            <div style={{ textAlign:'right', }}>
                item name :D
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', }}>
                <div className="tooltip">
                    <span className="tooltiptext">put me down!</span>
                    <span className="circle-button material-symbols-outlined">add_circle</span>
                    
                </div>
                <div style={{width:'10px'}}></div>
                <div>
                    <span class="circle-button material-symbols-outlined">do_not_disturb_on</span>
                </div>
            </div>
        </div>
    )
}