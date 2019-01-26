import {
    FETCH_NBA_TEAM_INFO_START,
    FETCH_NBA_TEAM_INFO_SUCCESS,
    FETCH_NBA_TEAM_INFO_FAILURE,
} from '../../actions';

const initialState = {
    teamInfoHeaders0: [],
    teamInfoData0: [],
    teamInfoHeaders1: [],
    teamInfoData1: [],
    teamInfoHeaders2: [],
    teamInfoData2: [],
    fetchigTeamInfo: false,
    error: null,
}

export const nbaReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NBA_TEAM_INFO_START:
            return {
                ...state,
                fetchigTeamInfo: true,
            };
        case FETCH_NBA_TEAM_INFO_SUCCESS:
            return {
                ...state,
                error: null,
                fetchigTeamInfo: false,
                teamInfoHeaders0: action.payload[0].headers,
                teamInfoData0: action.payload[0].rowSet[0],
            };
        case FETCH_NBA_TEAM_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchigTeamInfo: false,
            };
        default:
            return state;
    }
}