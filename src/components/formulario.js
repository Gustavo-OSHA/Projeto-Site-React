import React, { useEffect } from 'react'
import {Form, FormGroup, Label, Input, Button, FormFeedback, Alert} from 'reactstrap'
import '../layout/formulario.css'
import { useState } from 'react'
import api from "../services/api";

const Formulario = () => {
    
// gerenciamento de dados

    const initialFormValues = {
        email: {
            valor: '',
            valido: null

        },
        telefone: {
            valor: '',
            valido: null

        },
        texto: {
            valor: '',
            valido: null

        }
    }
    const [formValues, setFormValues] = useState(initialFormValues);

    const [statusEnvio, setStatusEnvio] = useState({
        status: null,
        mensagem: ''
    });
    
   

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let valido = true;

        if(name === 'telefone') {
            value = value.replace(/[^0-9]/g,"") //nao permite digitar letras no telefone 
            value = value.replace(/^(\d{2})(\d)/g,"($1) $2")
            if (!value.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/)) {
                valido = false;
            }
            
        } else if (name === 'email' && !value.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/)) {
            valido = false;
            
        } else if (name === 'texto' && !value.trim() ) {
            valido = false;
        }
        // Define valor e se é valido para o campo
        setFormValues({
            ...formValues, 
            [name]: {
                valor: value,
                valido: valido
            }
        });

        // Reseta alerta do formulário
        setStatusEnvio({
            status: null,
            mensagem: ''
        })
        

    }

    const handleSubmit=(e) =>{
        e.preventDefault(); //nao permite o reload da pagina apos clicar no botao enviar
        console.log (formValues);
        console.log(formValues.email);
        console.log(formValues.telefone);
        console.log(formValues.texto);
        
        if (!formValues.email.valido || !formValues.telefone.valido || !formValues.texto.valido ) {
            setStatusEnvio({
                status: false,
                mensagem: 'Verifique os campos digitados.'
            })
            return false;
        }

        let postData = {
            email: formValues.email.valor,
            telefone: formValues.telefone.valor,
            texto: formValues.texto.valor,
        }

        
        
        api
        .post("/api", postData)
        .then((response) => {
            setFormValues(initialFormValues)

            setStatusEnvio({
                status: true,
                mensagem: 'E-mail enviado com sucesso!'
            })
        })
        .catch((err) => {
            setStatusEnvio({
                status: false,
                mensagem: 'Ocorreu um erro, tente novamente mais tarde.'
            })
        });
        
    }  
    return (
        <Form className="square border border-5 rounded-3 p-3" onSubmit={handleSubmit}>
            {statusEnvio.status !== null ? <Alert color={statusEnvio.status === true ? 'success' : 'danger'}>
                {statusEnvio.mensagem}
            </Alert>: null}
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="name@example.com" invalid={formValues.email.valido === false} valid={formValues.email.valor && formValues.email.valido} onChange={handleInputChange} value={formValues.email.valor || '' }/>
                {!formValues.email.valido ? <FormFeedback>Email com formato invalido</FormFeedback> : null}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" name="telefone" placeholder="(xx) xxxxxxxxx" onChange={handleInputChange} invalid={formValues.telefone.valido === false} valid={formValues.telefone.valor && formValues.telefone.valido} value={formValues.telefone.valor || ''}/>
                {!formValues.telefone.valido ? <FormFeedback>Telefone com formato invalido</FormFeedback> : null}
            </FormGroup>                 
            
            <FormGroup>
                <Label htmlFor="texto">Escreva a sua Mensagem</Label>
                <Input type="textarea" id="texto" name="texto" cols="5" rows="5" onChange={handleInputChange} invalid={formValues.texto.valido === false} valid={formValues.texto.valor && formValues.texto.valido}  value={formValues.texto.valor || ' '}/>
                {!formValues.texto.valido ? <FormFeedback>É necessario preencer o campo Mensagem</FormFeedback> : null}
            </FormGroup>
            
            <Button type="submit" value="Enviar" 
            // disabled={!formValues.email.valido || !formValues.telefone.valido || !formValues.texto.valido}
             color="primary" size='lg' outline>Enviar</Button>
        </Form>
    )
}

export default Formulario;