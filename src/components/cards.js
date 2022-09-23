
import React from 'react'
/*<<<<<<< HEAD*/
import  {CardGroup , Card , CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
/*=======*/

/*>>>>>>> 62f84e2 (no message) */
import '../layout/cards.css'


const Cards = () => {
  return (
    <CardGroup>
        <Card>
            <CardImg
            className='img-thumbnail'
            alt="Desenvolvimento de Sistemas Integrados"
            src="https://cdn.pixabay.com/photo/2017/05/11/04/11/binary-2302728_960_720.jpg"
            top
            width="100%"
            />
            <CardBody className='body'>
            <CardTitle tag="h5">Desenvolvimento de Sistemas Integrados</CardTitle>
            <CardText>Desenvolvemos sistemas, de acordo com a necessidade da empresa.</CardText>            
            </CardBody>
        </Card>
        <Card>
            <CardImg
            className='img-thumbnail'
            alt="Consultoria"
            src="https://cdn.pixabay.com/photo/2019/11/29/16/44/businessman-4661727_960_720.jpg"
            top
            width="100%"
            />
            <CardBody className='body'>
            <CardTitle tag="h5">Consultoria técnica para Startups</CardTitle>
            <CardText>Equipe preparada para suporte em várias áreas</CardText>
            </CardBody>
        </Card>
        <Card>
            <CardImg
            className='img-thumbnail'
            alt="Processamento de Dados"
            src="https://cdn.pixabay.com/photo/2021/01/07/06/03/circuits-5896296_960_720.jpg"
            top
            width="100%"
            />
            <CardBody className='body'>
            <CardTitle tag="h5">Processamento e visualização de dados</CardTitle>
            <CardText>Desenvolvemos sistemas, de acordo com a necessidade da empresa.</CardText>        
            </CardBody>
        </Card>
</CardGroup>
  )
}

export default Cards;

