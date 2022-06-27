import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Artist } from "./components/Artist";
import { Form } from "./components/Form";
import { Letter } from "./components/Letter";

function App() {
  const [letter, setLetter] = useState({});
  const [songLetter, setSongLetter] = useState('');
  const [artistInfo, setArtistInfo] = useState({});
  const getLetter = async () => {
    if (Object.keys(letter).length === 0) return;
    const { artist, title } = letter;
    const [letterInfo, artistInfo] = await Promise.all([
      axios(`https://api.lyrics.ovh/v1/${artist}/${title}`),
      axios(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`)
    ]);
    console.log(letterInfo);
    console.log(artistInfo);
    setSongLetter(letterInfo.data.lyrics);
    setArtistInfo(artistInfo.data.artists[0])
  }
  useEffect(() => {
    getLetter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letter])

  return (
    <Fragment>
      <Form
        setLetter={setLetter}
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <Artist
              artist={artistInfo}
            />
          </div>
          <div className="col-12 col-md-6">
            <Letter
              letter={songLetter}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
