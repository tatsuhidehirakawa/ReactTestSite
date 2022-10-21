/* --+----+----+----+----+----+----+----+


         Custom Button Components

         
+----+----+----+----+----+----+----+--- */
import React from "react";
import './A_Button_a.scss';

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
}

const A_BUTTON_A: React.FC<Props> = ({
  onClick,
  children,
}) => {
    return (
      <button
      className="tx-btn"
      onClick={onClick}
      >
        {children}
      </button>
    );
}

export default A_BUTTON_A;