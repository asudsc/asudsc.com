import React from 'react';

export default function discord(props) {

    const isBrowser = typeof window !== `undefined`;

    if (isBrowser) {
        window.location.href = 'https://discord.com/invite/uDnXrbh';
    }


    return (
        <div>
        </div>
    )

}