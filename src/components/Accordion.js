import React, { useState } from 'react';

const Accordion = ({ title, arrow, content, nameClass }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={nameClass + "__item"}>
      <div className={nameClass + "__question"} onClick={() => setIsActive(!isActive)}>
        <h2
          className={nameClass + "__title"}
        >
          {title}
        </h2>
        <img src={arrow} className={isActive ? nameClass + "__arrow_active" : nameClass + "__arrow" } />
      </div>
      {isActive && <p className={nameClass + '__answer'}>{content}</p>}
    </div>
  );
};

export default Accordion;
