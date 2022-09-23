import React from 'react'
import  {CardGroup , Card , CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'


const Cards2 = () => {
  return (
    <CardGroup>
        <Card>
            <CardImg
            alt="Equipe"
            src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">Equipe</CardTitle>            
            <CardText>Equipe qualificada para o atendimento de várias demandas</CardText>            
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Adaptabilidade"
            src="https://cdn.pixabay.com/photo/2016/01/06/21/42/light-bulbs-1125016_960_720.jpg"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">Adaptabilidade</CardTitle>            
            <CardText>Somos flexíveis e nos adaptamos para atender a real necessidade da Empresa.</CardText>            
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Transparencia"
            src="https://cdn.pixabay.com/photo/2015/12/15/09/00/success-1093891_960_720.jpg"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">Transparêcia</CardTitle>            
            <CardText>Todo o processo é realizado com transparêcia, com envolvimento da empresa em todas as etapas.</CardText>            
            </CardBody>
        </Card>
</CardGroup>
  )
}

export default Cards2;