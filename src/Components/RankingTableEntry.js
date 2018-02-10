import React from 'react';

function RankingTableEntry(props) {
    return (
        <tr>
            <td>{props.entry.team}</td>
            <td>{`${props.entry.wins} - ${props.entry.losses}`}</td>
            <td>{props.entry.map_wins}</td>
            <td>{props.entry.map_losses}</td>
            <td>{props.entry.differential}</td>
        </tr>
    )
}

export default RankingTableEntry;
