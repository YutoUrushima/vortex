import React from "react";

interface AddressFormProp {
  onSubmnitForm: (text: string) => void;
}

const AddressForm: React.FC<AddressFormProp> = (props) => {
  return (
    <form className="vortex__address-form">
      <label className="vortex__main-label" htmlFor="nirvara-address">
        Please enter the address after the town
      </label>
      <input className="vortex__main-input" type="text" name="vortex-address" id="nirvara-address" />
      <button type="submit">Execute</button>
    </form>
  );
};

export default AddressForm;
