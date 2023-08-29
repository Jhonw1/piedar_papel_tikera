import React, { useState } from 'react';

export const InputText = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Evita que el formulario se envíe y la página se recargue
      e.preventDefault();

      // Actualiza el estado del texto mostrado
      setDisplayText(inputValue);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <p>Texto ingresado: {displayText}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Usa el manejador de cambio personalizado
        onKeyDown={handleKeyDown} // Usa el manejador de eventos para la tecla Enter
      />    
    </>
  );
}
