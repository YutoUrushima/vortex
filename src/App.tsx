import React, { Fragment, useState } from "react";
import "./App.scss";
import axios from "axios";

import PostalCodeForm from "./components/PostalCodeForm";
import DisplayConverted from "./components/DisplayConverted";
import AddressForm from "./components/AddressForm";

interface AdressElement {
  pref: string | null;
  city: string | null;
  town: string | null;
  prefHiragana: string | null;
  cityHiragana: string | null;
  townHiragana: string | null;
}

const App: React.FC = () => {
  const [address, setAddress] = useState<AdressElement>({
    pref: null,
    city: null,
    town: null,
    prefHiragana: null,
    cityHiragana: null,
    townHiragana: null,
  });

  const fetchPostalCode = async (postalCode: string) => {
    await axios
      .get(`https://apis.postcode-jp.com/api/v5/postcodes/${postalCode}`, {
        params: {
          apikey: process.env.REACT_APP_POST_CODE_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
        setAddress({
          pref: res.data[0].pref,
          city: res.data[0].city,
          town: res.data[0].town,
          prefHiragana: res.data[0].hiragana.pref,
          cityHiragana: res.data[0].hiragana.city,
          townHiragana: res.data[0].hiragana.town,
        });
      })
      .catch((error) => console.log(error));
  };

  const fetchHiragana = async (text: string) => {
    await axios
      .post("https://labs.goo.ne.jp/api/hiragana", {
        app_id: process.env.REACT_APP_GOO_LAB_APP_KEY,
        sentence: text,
        output_type: "hiragana",
      })
      .then((res) => console.log(res.data.converted))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="nirvana__header">
        <h1 className="nirvana__header-title">Address Converter</h1>
      </header>
      <main className="nirvana__main">
        <div className="nirvana__main-wrapper">
          <h2>First, enter your zip code in the form below</h2>
          <PostalCodeForm onSubmitForm={fetchPostalCode} />
          <DisplayConverted displayConverted={address.pref!} />
          {address.pref ? (
            <Fragment>
              <p>
                Address: {address.pref} {address.city} {address.town}
              </p>
              <AddressForm onSubmnitForm={fetchHiragana} />
            </Fragment>
          ) : (
            <div>Nothing</div>
          )}
        </div>
      </main>
      <footer className="nirvana__footer">
        <small>&copy; Address Converter 2023</small>
      </footer>
    </div>
  );
};

export default App;
