import React from "react";

interface SubmitFormProps {
  onSubmitForm: (text: string) => void;
}

const AddressForm: React.FC<SubmitFormProps> = (props) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText: string = (document.getElementById("nirvara-address")! as HTMLInputElement).value.toString();
    props.onSubmitForm(inputText);
  };

  return (
    <form className="nirvana__main-form" onSubmit={submitHandler}>
      <label className="nirvana__main-label" htmlFor="nirvara-address">
        Input your address
      </label>
      <input className="nirvana__main-input" type="text" name="nirvana-address" id="nirvara-address" />
      <button type="submit">Execute</button>
    </form>
  );
};

export default AddressForm;
