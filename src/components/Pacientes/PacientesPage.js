import React, { Component } from 'react';
import Editar from './EditarPaciente';
import Consultar from './VerPaciente';

export class PacientesPage extends Component {

    state ={
        page: 1
    }

    /*Pasa a la siguiente página */
    siguiente = () => {
        const { page } =this.state;
        this.setState({
            page: page + 1
        });
    };

    /*Regresa a la página anterior */
    anterior = () => {
        const { page } =this.state;
        this.setState({
            page: page - 1
        });
    };

    render(){
        const { page } = this.state;
        
        switch (this.state.page){
            case 1:
                return (
                    <Consultar
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                    />
                );
            case 2:
                return (
                    <Editar
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                    />
                );
            default:
                return <div>Error</div>;
        }
    }
}
	
export default PacientesPage;