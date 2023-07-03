import React from "react";
import Paragraphs from "./Paragraphs";

export default (props) => {
  console.log("Congrats, the setup is successful!");
  console.log("Props received are: ", props);
  const {
    block: {
      main: {
        body: { paragraphs },
      },
    },
  } = props;
  console.log(props.profile);
  return (
    <>
      <p className="text-lg text-gray-700 font-bold px-4 py-2 bg-[var(--secondary)]">
        Hello World
      </p>
      <p dangerouslySetInnerHTML={{ __html: paragraphs[0] }}></p>
      <Paragraphs
        {...props}
        className="text-lg text-gray-700 font-bold px-4 py-2 bg-[var(--primary)]"
      />
    </>
  );
};
