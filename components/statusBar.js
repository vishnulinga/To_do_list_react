import React from "react"

const StatusBar=(props)=>{
    return(
        <table>
            <thead>
            <tr>
                <th>Pending Tasks</th>
                <th>Comleted Tasks</th>
                <th>High Priority Tasks</th>
                <th>Medium Priority Tasks</th>
                <th>Low Priority Tasks</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td id="pending">{props.pending}</td>
                <td id="completed">{props.completed}</td>
                <td id="high">{props.high}</td>
                <td id="medium">{props.medium}</td>
                <td id="low">{props.low}</td>
            </tr>
            </tbody>
        </table>
    )

}
export default StatusBar