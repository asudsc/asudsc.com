import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default class SolutionChallengeCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"solution_challenge_card"}>
                <div>
                    <h1 className={"title"}>{this.props.title}</h1>
                    <br />
                    {this.props.open == true &&
                        <div className={"project_badge_open"}>Open</div>
                    }
                    {this.props.open == false &&
                        <div className={"project_badge_closed"}>Closed</div>
                    }
                    <br />
                    <div className={"github_logo"}>
                        <FaGithub size={32} />
                    </div>
                    {this.props.members.map((member) => {
                        return (
                            <div className={"project_member"}>
                                <a href={`https://github.com/${member.github}`} target="_blank">
                                    <img className={"github_image"} src={`https://avatars.githubusercontent.com/${member.github}`}
                                        alt={member.name}
                                        title={member.name}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}