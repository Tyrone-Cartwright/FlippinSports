import React from 'react';
import { connect } from 'react-redux';
import { fetchNBATeamInfo } from '../../actions';

class nbaTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchNBATeamInfo(0);
    }


    render() {
        return (
            <div>
                {this.props.teamsHeaders0[0]}
                {this.props.teamsData0}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        teamsHeaders0: state.nbaReducer.teamInfoHeaders0,
        teamsData0: state.nbaReducer.teamInfoData0,
        fetchingNBATeams: state.nbaReducer.fetchigTeamInfo,
    };
}

export default connect(
    mapStateToProps,
    { fetchNBATeamInfo }
) (nbaTeams);