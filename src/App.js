//importação do reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//importação de componentes

import './App.css';
import  Navbar1 from './components/navbar';
import Carrossel from './components/carousel';
import { Card, CardGroup, Button, Container, Row, Col } from 'reactstrap';
import Cards from './components/cards';
import Cards2 from './components/cards2';
import Formulario from './components/formulario';
import Footer from './components/footer';
import botao from '../src/layout/botao.css'
import Lotties from './components/lottie';
import Whattsapp from './components/whattsapp';


function App() {
  return (
    <div className="App">
    {/* Nav Bar */}

    <Navbar1 />
    
          
    {/* Cabeçalho */} 

    <Container className="my-4">
      <Row xs="4">
        <Container className="col-12 col-lg-6 mt-5">
          <h1 className="text-center text-md-start">Se baseie em dados, tome melhores decisões. </h1>
          <p className="lead  text-center text-md-start mt-4">Trabalhamos os dados da sua organização
            para evoluir sua maturidade através dos serviços de engenharia de dados, business intelligence e ciência de dados.            
          </p>
          <Container className="mt-5">
            <Button className="botao" color="primary" size="lg">Saiba Mais</Button>
            <Button color="primary" outline size="lg" >Conheça nossos parceiros</Button>
          </Container>
        </Container>
        <Container className="col-12 col-lg-6 p-5">
          <Lotties />          
        </Container> 
      </Row>

      <Row>
        <Container className="col-12 mt-5">
          <p className="lead  text-center text-md-start mt-4">Somos uma empresa que estuda e projeta maneiras de interligar sistemas através de ferramentas que facilitam,
            automatizam e sistematizam processos administrativos da sua organização. Auxiliamos empresas de todos os tipos
            e tamanhos nos seus desafios com informação.
          </p>
        </Container>  
      </Row>
      <Row>
        <Container className="col-12  mt-5">
          <h2 className="text-center mb-5">Integrações para todos os segmentos.</h2>
          <h4 className="text-center mb-5">Financeiro Industria Varejo Startup</h4>
        </Container>
      </Row>
    </Container>
    

    <Carrossel/> 

    <Container className="container mb-5 mt-5">    
      <Row>
        <h2 className="text-center mb-5">Cenários de atuação.</h2>
      </Row>  
    </Container>  

    <Cards/> 
    
    {/* Quem Somos */ }
    
    <Container className="mt-5">
      <Row>
        <Container className="col-12 col-lg-6 mt-5">
          <h1 className="text-center text-md-start">Quem somos </h1>
          <p className="lead  text-center text-md-start mt-4">Nos baseamos em dados para dar suporte a uma melhor tomada de decisões estratégicas. Somos feitos
            de pessoas crentes que há um motes que liga a informação e o acesso a dados ao impacto que sua empresa deseja causar diante seus objetivos.            
          </p>
          <p className="lead  text-center text-md-start mt-4">O propósito da NOH é co-criar organizações data-driven. Ajudamos empresas a usarem dados para 
            otimizar processos, identificar problemas e melhorar seus resultados.
          </p>
          <p className="lead  text-center text-md-start mt-4">Realizamos serviço de consultoria para desenvolvimento de emrpresas que acessam grandes volumes de dados em seu
            dia-a-dia. Oferecemos excelência na capacidade de customizare adaptar nossa atuação dentro da sua empresa e entregar o controle total para sua equipe de 
            acompanhemnto para sua demanda.
          </p>         
        </Container>

        <Container className="col-12 col-lg-6 p-5 my-5">
          <Whattsapp/>                 
          <Button className="mt-3" color="success" outline size="lg" >Converse agora via Whatsapp</Button> 
        </Container> 
      </Row>
    </Container>

    {/* Porque Escolher a NOH */}

    <Container className="mb-5">    
      <Row>
        <h2 className="text-center mb-5">Por quê escolher a NOH?</h2>
      </Row>
    </Container>    

    <Cards2/>

    {/*Contato*/}

    <Container className="my-4 mb-5 mt-5 col-4">
      <Row>
        <h2 className="text-center mb-5">Contato</h2>
      </Row> 
      <Row>
        <Formulario/>
      </Row>
    </Container>        

    {/*Rodapé*/ }  

    <Footer/>            
      
    </div>
  );
}

export default App;
