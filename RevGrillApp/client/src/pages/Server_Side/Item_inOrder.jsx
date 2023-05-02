import React from 'react';

export default function ItemInOrder(item) {

    if (item == null) {
        let item = {
            "name": "empty",
            "img": "missing"
        }
    }

    return (
        <div style={{ display:'flex', justifyContent:'space-between', backgroundColor:'var(--custom-extra-light)', }}>
            <div style={{ textAlign:'right', }}>
                {item.name}
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', }}>
                <div className="tooltip">
                    <span className="tooltiptext">add 1 more</span>
                    <span className="circle-button material-symbols-outlined">add_circle</span>
                </div>
                <div style={{width:'10px'}}></div>
                <div className="tooltip">
                    <span style={{left:"-250%"}} className="tooltiptext">remove 1</span>
                    <span class="circle-button material-symbols-outlined">do_not_disturb_on</span>
                </div>
            </div>
        </div>
    )
}