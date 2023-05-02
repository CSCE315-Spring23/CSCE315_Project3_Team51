import React from 'react'

/**
 * Takes in string JSON data and returns a formatted HTML table with the given information in two columns
 * @param {string} c - c1-c2 are the names of JSON keys
 * @param {string} h - h1-h2 are the desired column heading names corresponding to c1-c2
 * @param {string} text_data - the stringified JSON data returned from the backend
 * @author Harini Kumar
 */
export default function JsonToTable2(c1, c2, h1, h2, text_data){
    const json_data = JSON.parse(text_data)
    const table_display = json_data.map(
        (data)=>{
            return(
                <tr>
                    <td>{data[c1]}</td>
                    <td>{data[c2]}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table class="table2">
                <thead>
                    <tr>
                    <th>{ h1 }</th>
                    <th>{ h2 }</th>
                    </tr>
                </thead>
                <tbody>
                    { table_display }
                </tbody>
            </table>
        </div>
    )
}