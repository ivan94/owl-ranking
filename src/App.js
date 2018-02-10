import React, { Component } from 'react';
import Ranking from './Components/Ranking';
import Store from './Store/Store';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = Store.getState();
        Store.subscribe(() => {
            this.setState(Store.getState())
        });
    }
    render() {
        return (
            <Ranking loading={this.state.loading} ranking={this.state.ranking}/>
        );
    }

    componentDidMount() {
        Store.dispatch({type: 'START_LOADING'});
        fetch("https://api.overwatchleague.com/standings?expand=team.content&locale=en_US").then((response) => {
            response.json().then((json) => {
                var ranking = this.buildRankingFromResponse(json);
                Store.dispatch({type: 'SET_RANKING', ranking: ranking});
                Store.dispatch({type: 'END_LOADING'});
            });
        });
    }

    buildRankingFromResponse(response) {
        return response.ranks.map((rank) => {
            return {
                team: rank.competitor.name,
                wins: rank.records[0].matchWin,
                losses: rank.records[0].matchLoss,
                map_wins: rank.records[0].gameWin,
                map_losses: rank.records[0].gameLoss,
                differential: rank.records[0].gameWin - rank.records[0].gameLoss
            }
        });
    }
}

export default App;
