import React from 'react';
import './App.css'; // Importe o mesmo arquivo de estilo da página de login
import weatherImage from './NewImage8K.jpg'; // Importe a imagem utilizada na página de login

const SuccessPage = ({ onBack }) => {
  const handleBack = () => {
    console.log("Botão 'Voltar para o login' clicado");
    onBack();
  };

  return (
    <div className="weather">
      {/* Usa a mesma classe CSS para a imagem */}
      <img src={weatherImage} alt="weather" className="weather__img" />
      
      <div className="weather__form">
        <h2 className="weather__title">Login bem<br></br>sucedido!</h2>
        <p><center>Você foi autenticado com sucesso.</center></p>
        <button onClick={handleBack} className="weather__button">Voltar para o login</button>
      </div>
    </div>
  );
};

export default SuccessPage;