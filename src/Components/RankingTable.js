import React, { Component } from 'react';
import RankingTableEntry from './RankingTableEntry';

class RankingTable extends Component {
    render() {
        var orderedRanking = this.sortRanking(this.props.ranking);
        var rows = orderedRanking.map(function (entry, id) {
            return (
                <RankingTableEntry key={id} entry={entry} />
            );
        });
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Team</td>
                            <td>Win-Loss</td>
                            <td>Map Win</td>
                            <td>Map Loss</td>
                            <td>Map Differential</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }

    sortRanking(ranking) {
        return [...ranking].sort(function(a, b) {
            var diff = a.wins - b.wins;
            if(diff !== 0){
                return -diff;
            } else {
                return -(a.differential - b.differential);
            }
        });
    }
}

export default RankingTable;
