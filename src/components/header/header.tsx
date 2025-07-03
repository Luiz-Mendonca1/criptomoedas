// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Para estilos CSS

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Cripto-agora" }) => {
  return (
    <header className="app-header">
      <Link to="/" className="header-logo-link">
        {/* Usando o h1 como sua "logo" clicável, já que não temos uma tag <img> no seu código original */}
        <h1>{title}</h1>
      </Link>
      {/* <nav> e seus itens de navegação foram removidos aqui */}
    </header>
  );
};

export default Header;