import React from "react";
import axios from "axios";
import AddressForm from "../components/AddressForm";

import { AddressFormat } from "../models/Address";

interface AddressProps {
  address: AddressFormat;
}

const DisplayPostalCodeResult: React.FC<AddressProps> = (props) => {
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
    <div className="vortex__result">
      <p className="vortex__result-address">
        {props.address.pref} {props.address.city} {props.address.town}
      </p>
      <AddressForm onSubmnitForm={fetchHiragana} />
    </div>
  );
};
export default DisplayPostalCodeResult;
