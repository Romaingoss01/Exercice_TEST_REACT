import React, { useState } from 'react'

export default function ToggleMessage() {

    const [visible, setVisible] = useState(false);

    const toggleMessage = () => {
    setVisible(!visible);
    };
    
    return (
    <div>
      <button onClick={toggleMessage}>
        {visible ? "Cacher" : "Afficher"}
      </button>

      {visible && (
        <p>
          Ceci est un message qui peut être affiché ou caché.
        </p>
      )}
    </div>
  );

}