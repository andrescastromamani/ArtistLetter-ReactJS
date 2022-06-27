import React from 'react'

export const Letter = ({ letter }) => {
    if (letter.length === 0) return;
    return (
        <div>
            <h2>Lyric</h2>
            <hr />
            <p>
                {letter}
            </p>
        </div>
    )
}
