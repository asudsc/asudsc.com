import React from 'react';

export default function discord(props) {

    const isBrowser = typeof window !== `undefined`;

    if (isBrowser) {
        window.location.href = 'https://dsc.community.dev/events/details/developer-student-clubs-arizona-state-university-presents-solutions-challenge-kickoff-arizona-state-university/';
    }


    return (
        <div>
        </div>
    )

}