import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { render } from '@testing-library/react'
class ModalNovoProjeto extends Component{
    constructor(){
        super()
        this.state = {
            nome: "",
            usuario: "",
            descricao: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange = ({target}) =>  this.setState({[target.name]: target.value})

    handleSubmit(evento){
        evento.preventDefault()
        this.props.inserirProjeto(this.state);
    }

render() {

return( 
    <Modal trigger={<Button  primary>criar projeto</Button>}>
        <Modal.Header>Cadastrar Projeto</Modal.Header>
        <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input name="Nome" value={this.state.nome} onChange={this.handleInputChange} label="Nome do projeto"/>
                <Form.Input name="Usuario" value={this.state.usuario} onChange={this.handleInputChange} label="Nome do autor"/>
                <Form.TextArea name="Descricao" value={this.state.descricao} onChange={this.handleInputChange} label="Descrição do projeto"/>
                <Button primary type="submit" >Criar projeto</Button>
            </Form>
        </Modal.Content>
    </Modal>
);
}
}
export default ModalNovoProjeto