import React, { useState } from "react";
import "./App.scss";
import axios from "axios";

import AddressForm from "./components/AddressForm";
import DisplayConverted from "./components/DisplayConverted";

const App: React.FC = () => {
  const [address, setAddress] = useState<string>("");

  const fetchHiragana = async (text: string) => {
    await axios
      .post("https://labs.goo.ne.jp/api/hiragana", {
        app_id: process.env.REACT_APP_GOO_LAB_APP_KEY,
        sentence: text,
        output_type: "hiragana",
      })
      .then((res) => setAddress(res.data.converted))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="nirvana__header">
        <h1 className="nirvana__header-title">Address Converter</h1>
      </header>
      <main className="nirvana__main">
        <div className="nirvana__main-wrapper">
          <AddressForm onSubmitForm={fetchHiragana} />
          <DisplayConverted displayConverted={address} />
        </div>
      </main>
      <footer className="nirvana__footer">
        <small>&copy; Address Converter 2023</small>
      </footer>
    </div>
  );
};

export default App;
