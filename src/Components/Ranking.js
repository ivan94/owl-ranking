import React, { Component } from 'react';
import RankingTable from './RankingTable';

class Ranking extends Component {
    render() {
        if(this.props.loading) {
            return (
                <div className="ranking">
                    <h1>League ranking</h1>
                    <p>Loading...</p>
                </div>
            );
        }
        return (
            <div className="ranking">
                <h1>League ranking</h1>
                <RankingTable ranking={this.props.ranking} />
            </div>
        );
    }
}

export default Ranking;
