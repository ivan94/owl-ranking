import { createStore } from 'redux';

const defaultState = {
    ranking: [],
    loading: false
}

function rankingRedux(state, action) {
    switch (action.type) {
        case 'SET_RANKING':
            return {
                ranking: [...action.ranking],
                loading: state.loading
            };
        case 'START_LOADING':
            return {
                ranking: [...state.ranking],
                loading: true
            };
        case 'END_LOADING':
            return {
                ranking: [...state.ranking],
                loading: false
            };
        default:
            return state;
    }
}

let store = createStore(rankingRedux, defaultState);

export default store;
