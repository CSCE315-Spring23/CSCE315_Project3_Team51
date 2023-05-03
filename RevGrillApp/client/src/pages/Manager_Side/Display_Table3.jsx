import React from 'react'

/**
 * Takes in string JSON data and returns a formatted HTML table with the given information in three columns
 * @param {string} c - c1-c3 are the names of JSON keys
 * @param {string} h - h1-h3 are the desired column heading names corresponding to c1-c3
 * @param {string} text_data - the stringified JSON data returned from the backend
 * @author Harini Kumar
 */
export default function JsonToTable3(c1, c2, c3, h1, h2, h3, text_data){
    const json_data = JSON.parse(text_data)
    const table_display = json_data.map(
        (data)=>{
            return(
                <tr>
                    <td class="c1-3">{data[c1]}</td>
                    <td class="c2-3">{data[c2]}</td>
                    <td class="c3-3">{data[c3]}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table class="table3">
                <thead>
                    <tr>
                    <th class="c1-3">{ h1 }</th>
                    <th class="c2-3">{ h2 }</th>
                    <th class="c3-3">{ h3 }</th>
                    </tr>
                </thead>
                <tbody>
                    { table_display }
                </tbody>
            </table>
        </div>
    )
}