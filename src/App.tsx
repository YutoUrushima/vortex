import React, { Fragment, useState } from "react";
import "./App.scss";
import axios from "axios";

import PostalCodeForm from "./components/PostalCodeForm";
import DisplayConverted from "./components/DisplayConverted";
import DisplayPostalCodeResult from "./components/DisplayPostalCodeResult";

import { AddressFormat } from "./models/Address";

const App: React.FC = () => {
  const [address, setAddress] = useState<AddressFormat>({
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

  return (
    <div className="App">
      <header className="vortex__header">
        <h1 className="vortex__header-title">Address Converter</h1>
      </header>
      <main className="vortex__main">
        <div className="vortex__main-wrapper">
          <h2>First, enter your zip code in the form below</h2>
          <PostalCodeForm onSubmitForm={fetchPostalCode} />
          {/* <DisplayConverted displayConverted={address.pref!} /> */}
          {address.pref ? <DisplayPostalCodeResult address={address} /> : <Fragment></Fragment>}
        </div>
      </main>
      <footer className="vortex__footer">
        <small>&copy; Address Converter 2023</small>
      </footer>
    </div>
  );
};

export default App;
