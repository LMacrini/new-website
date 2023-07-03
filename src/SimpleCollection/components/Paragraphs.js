import React from "react";

export default ({ block, className }) => {
  const {
    main: {
      body: { paragraphs },
    },
  } = block;

  return (
    <>
      {paragraphs.map((item, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: item }}
          className={className}
        ></p>
      ))}
    </>
  );
};
