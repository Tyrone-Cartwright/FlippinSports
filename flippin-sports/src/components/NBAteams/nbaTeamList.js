import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import NBAteam from "./nbateam";

// styled components
const NBAContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TeamsContainer = styled.div`
    width: 200px;
    margin-left: 20px;
    margin-right: 50px;
    padding-right: 30px;
    border-right: 1px solid lightgray;
`;

const TeamContent = styled.div`
    margin-bottom: 10px;

    a {
        color: #222222;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;
    }
`;

class nbaTeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                "Atlanta Hawks",
                "Boston Celtics",
                "Brooklyn Nets",
                "Charlotte Hornets",
                "Chicago Bulls",
                "Cleveland Cavaliers",
                "Dallas Mavericks",
                "Denver Nuggets",
                "Detroit Pistons",
                "Golden State Warriors",
                "Houston Rockets",
                "Indiana Pacers",
                "Los Angeles Clippers",
                "Los Angeles Lakers",
                "Memphis Grizzlies",
                "Miami Heat",
                "Milwaukee Bucks",
                "Minnesota Timberwolves",
                "New Orleans Pelicans",
                "New York Knicks",
                "Oklahoma City Thunder",
                "Orlando Magic",
                "Philadelphia 76ers",
                "Phoenix Suns",
                "Portland Trail Blazers",
                "Sacramento Kings",
                "San Antonio Spurs",
                "Toronto Raptors",
                "Utah Jazz",
                "Washington Wizards",
            ],
            teamId: [
                1610612737,
                1610612738,
                1610612751,
                1610612766,
                1610612741,
                1610612739,
                1610612742,
                1610612743,
                1610612765,
                1610612744,
                1610612745,
                1610612754,
                1610612746,
                1610612747,
                1610612763,
                1610612748,
                1610612749,
                1610612750,
                1610612740,
                1610612752,
                1610612760,
                1610612753,
                1610612755,
                1610612756,
                1610612757,
                1610612758,
                1610612759,
                1610612761,
                1610612762,
                1610612764,
            ],
        };
    }

    render() {
        return (
            <NBAContainer>
                <TeamsContainer>
                    {this.state.names.map((name, index) => {
                        return (
                            <TeamContent
                                key={index}
                                onClick={() => this.props.selectTeam(index)}
                            >
                                <Link to={`/nba/${name}/${index}`}>{name}</Link>
                            </TeamContent>
                        );
                    })}
                </TeamsContainer>
                <Route
                    path={`/nba/:name/:id`}
                    render={props => <NBAteam {...props} />}
                />
            </NBAContainer>
        );
    }
}

export default nbaTeamList;
