import React from 'react';
import BrandingHeader from "../components/partials/BrandingHeader"
import Button from "../components/Button";
import SolutionChallengeCard from "../components/partials/SolutionChallengeCard"
import { FaDiscord } from 'react-icons/fa';

export default class SolutionChallenge extends React.Component {


    joinDiscord() {
        window.open("https://discord.gg/uDnXrbh");
    }

    render() {
        return (
            <div>
                <BrandingHeader page_title={"Google Solution Challenge"} />
                <br />
                <br />
                <center>
                    <Button theme={"blue_solid"} onClick={this.joinDiscord}><FaDiscord />&nbsp;&nbsp;Pitch an idea</Button>
                </center>
                <br />
                <br />
                <SolutionChallengeCard 
                    title={"Project Tesla"}
                    open={false}
                    members={
                        [
                            {
                                "name": "Ananay Arora",
                                "github": "ananay"
                            },
                            {
                                "name": "Ninad Kulkarni",
                                "github": "ninkuk"
                            },
                            {
                                "name": "Rohit Singh",
                                "github": "rohitksingh"
                            }
                        ]
                    }
                />
                <SolutionChallengeCard 
                    title={"Project 1842"}
                    open={true}
                    members={[
                        {
                            "name": "Andrew Hill",
                            "github": "andrewhill22"
                        },
                    ]}
                />
            </div>
        )
    }
}