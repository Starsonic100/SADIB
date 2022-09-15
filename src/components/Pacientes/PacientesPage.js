import React, { Component } from 'react';
import VerPacientes from './VerPaciente';
import EditarPaciente from './EditarPaciente';

export class PacientesPage extends Component {

    state ={
        page: 1,
        id_paciente: ''
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

    handleInputChange = input => e =>{
        this.setState({
            [input]:e.target.value
        });
    };

    render(){
        const { page } = this.state;

        const {id_paciente} =this.state;

        const values = {id_paciente}
        
        switch (this.state.page){
            case 1:
                return (
                    <VerPacientes
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        values={values}
                    />
                );
            case 2:
                return (
                    <EditarPaciente
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
                
            default:
                return <div>Error</div>;
        }
    }
}
	
export default PacientesPage;