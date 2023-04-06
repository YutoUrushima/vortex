import React from "react";

interface PostalCodeProps {
  onSubmitForm: (text: string) => void;
}

const PostalCodeForm: React.FC<PostalCodeProps> = (props) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputCode: string = (document.getElementById("nirvara-postalCode")! as HTMLInputElement).value.toString();
    props.onSubmitForm(inputCode);
  };

  return (
    <form className="nirvana__main-form" onSubmit={submitHandler}>
      <input className="nirvana__main-input" type="text" name="nirvana-address" id="nirvara-postalCode" />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostalCodeForm;
