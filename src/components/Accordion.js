import React, { useState } from 'react';

const Accordion = ({ title, content, nameClass }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={nameClass + "__item"}>
      <div className={nameClass + "__question"} >
        <h2
          onClick={() => setIsActive(!isActive)}
          className={nameClass + "__title"}
        >
          {title}
        </h2>
      </div>
      {isActive && <div className={nameClass + '__answer'}>{content}</div>}
    </div>
  );
};

export default Accordion;
