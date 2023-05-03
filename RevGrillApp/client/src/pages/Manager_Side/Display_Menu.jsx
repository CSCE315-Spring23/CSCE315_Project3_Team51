import React from 'react'

export default function JsonToMenu(c1, c2, c3, c4, c5, h1, h2, h3, h4, h5, text_data){
    const json_data = JSON.parse(text_data)
    const table_display = json_data.map(
        (data)=>{
            return(
                <tr>
                    <td>{data[c1]}</td>
                    <td>{data[c2]}</td>
                    <td>{data[c3]}</td>
                    <td>{data[c4]}</td>
                    <td>{data[c5]}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table class="table3">
                <thead>
                    <tr>
                    <th>{ h1 }</th>
                    <th>{ h2 }</th>
                    <th>{ h3 }</th>
                    <th>{ h4 }</th>
                    <th>{ h5 }</th>
                    </tr>
                </thead>
                <tbody>
                    { table_display }
                </tbody>
            </table>
        </div>
    )
}