import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Letter } from "./components/Letter";

function App() {
  const [letter, setLetter] = useState({});
  const [songLetter, setSongLetter] = useState('');
  const getLetter = async () => {
    if (Object.keys(letter).length === 0) return;
    const { artist, title } = letter;
    const response = await axios(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    setSongLetter(response.data.lyrics);
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
            artist
          </div>
          <div className="col-12 col-md-6">
            {
              letter !== '' ? <Letter
                letter={songLetter}
              /> : null
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
