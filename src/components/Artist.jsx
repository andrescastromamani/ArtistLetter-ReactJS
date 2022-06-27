import React from 'react'

export const Artist = ({ artist }) => {
    if (Object.keys(artist).length === 0) return;
    const { strArtistThumb, strArtist, strGenre, strBiographyEN } = artist;
    return (
        <div>
            <h2>Artist</h2>
            <hr />
            <div className="card">
                <img src={strArtistThumb} className="card-img-top" alt="logo artist" />
                <div className="card-body">
                    <h5 className="card-title">{strArtist}</h5>
                    <p>Gender: <span className="bg-danger px-2 rounded text-white">{strGenre}</span></p>
                    <p className="card-text">{strBiographyEN}</p>
                </div>
            </div>
        </div>
    )
}
