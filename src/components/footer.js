import React from 'react'
import { Container } from 'reactstrap';
import logo from '../assets/img/PNG-noh.png'
import footer from '../layout/footer.css'


const Footer = () => {
  return (
  <footer className="p-5">
    <Container>
    <img src={logo} alt="Noh" srcSet="" height="100"/>
    </Container>
    <Container className="mt-3">
        <a href="https://www.gov.br/defesa/pt-br/acesso-a-informacao/lei-geral-de-protecao-de-dados-pessoais-lgpd#:~:text=A%20Lei%20Geral%20de%20Prote%C3%A7%C3%A3o,de%20liberdade%20e%20de%20privacidade">
          Lei de Proteção de Dados - LGPD</a>
    </Container>
    <Container className="mt-3">
      <p className="copyright">&copy; Copyright NOH - 2022</p>
    </Container>    
  </footer>
    
  )
}

export default Footer;