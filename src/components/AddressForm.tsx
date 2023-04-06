import React from "react";

interface AddressFormProp {
  onSubmnitForm: (text: string) => void;
}

const AddressForm: React.FC<AddressFormProp> = () => {
  return (
    <form className="nirvana__address-form">
      <label className="nirvana__main-label" htmlFor="nirvara-address">
        Input your address
      </label>
      <input className="nirvana__main-input" type="text" name="nirvana-address" id="nirvara-address" />
      <button type="submit">Execute</button>
    </form>
  );
};

export default AddressForm;
