import React from 'react';

/**
    A component representing an item in an order
    @author Casey @peicasey

    @param {Object} item - The item object containing its name and image
    @returns {JSX.Element} - A JSX element that renders the item with buttons to add/remove it from the order
*/
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