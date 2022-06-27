import React, { useState } from 'react'

export const Form = ({ setLetter }) => {
    const [song, setSong] = useState({
        artist: '',
        title: ''
    });
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        setSong({
            ...song,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (song.artist.trim() === '' || song.title.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setLetter(song)
    }
    return (
        <div className='bg-info pt-3 pb-3'>
            <div className="container">
                <h1 className='text-center'>Find Your Artist Letter</h1>
                {
                    error ? <div className="alert alert-danger" role="alert">
                        All fields are required!
                    </div> : null
                }
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="col-12 col-md-5">
                            <div className='mb-3'>
                                <label htmlFor="artist" className='form-label text-white'>Song Artis Name</label>
                                <input
                                    type="text"
                                    name='artist'
                                    placeholder='Artist Name'
                                    className='form-control'
                                    value={song.artist}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className='mb-3'>
                                <label htmlFor="title" className='form-label text-white'>Sont Title</label>
                                <input
                                    type="text"
                                    name='title'
                                    placeholder='Song Title'
                                    className='form-control'
                                    value={song.title}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-end">
                            <div className='mb-3 w-100'>
                                <button className='btn btn-danger btn-block'>Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
