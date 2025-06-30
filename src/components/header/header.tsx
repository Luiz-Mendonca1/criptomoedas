// src/components/Header.tsx

import React from 'react';
import './style.css'; // Opcional: Para estilos CSS

interface HeaderProps {
  // Você pode definir props aqui se quiser passar dados para o Header.
  // Por exemplo, um título:
  title?: string; 
}

const Header: React.FC<HeaderProps> = ({ title = "Cripto-agora" }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/detail">Details</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;