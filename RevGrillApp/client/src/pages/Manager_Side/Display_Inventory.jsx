import React from 'react'

export default function JsonToTable(text_data){
    const json_data = JSON.parse(text_data)
    const table_display = json_data.map(
        (data)=>{
            return(
                <tr>
                    <td>{data.ingredient_name}</td>
                    <td>{data.units}</td>
                    <td>{data.quantity}</td>
                    <td>{data.min_q}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th class="ing">Ingredient</th>
                    <th class="units">Units</th>
                    <th class="qty">Quantity</th>
                    <th class="min_qty">Minimum Quantity</th>
                    </tr>
                </thead>
                <div class="scroll-div">
                <tbody>
                        { table_display }
                </tbody>
                </div>
            </table>
        </div>
    )
}