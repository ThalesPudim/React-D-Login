import React, { useState } from 'react';
import SuccessPage from './SuccessPage';
import './App.css';
import weatherImage from './NewImage8K.jpg'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validação do email
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Se o login for bem-sucedido, definir loggedIn como true
        setLoggedIn(true);
      } else {
        // Se o login falhar, exibir mensagem de erro
        setError(data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return <SuccessPage onBack={handleLogout} />;
  }

  return (
    <div className="weather">
      {/* Usa a imagem importada diretamente */}
      <img src={weatherImage} alt="weather" className="weather__img" />

      <form className="weather__form" onSubmit={handleSubmit}>
        <h1 className="weather__title">Login</h1>
        {error && <p className="weather__error">{error}</p>}
        <div className="weather__content">
          <div className="weather__box">
            <i className="ri-earth-line weather__icon"></i>
            <div className="weather__box-input">
               <input type="email" required className="weather__input" value={email} onChange={(e) => setEmail(e.target.value)} />
               <label htmlFor="email" className="weather__label">Email</label>
            </div>
          </div>

          <div className="weather__box">
            <i className="ri-lock-line weather__icon"></i>
            <div className="weather__box-input">
               <input type="password" required className="weather__input" value={password} onChange={(e) => setPassword(e.target.value)} />
               <label htmlFor="password" className="weather__label">Senha</label>
            </div>
          </div>
        </div>
        <button type="submit" className="weather__button">Entrar</button>
      </form>
    </div>
  );
}

export default App;