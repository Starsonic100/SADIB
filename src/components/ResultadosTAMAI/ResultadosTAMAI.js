import React, { Component } from 'react';

import TablaTamai from './TablaTamai';
export class ResultadosTAMAI extends Component {

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

    handleInputChange = input => e =>{
        this.setState({
            [input]:e.target.value
        });
    };

    render(){
        const { page } = this.state;

        const {} =this.state;
        const values = {}
        
        switch (this.state.page){
            case 1:
                return (
                    <TablaTamai
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        values={values}
                    />
                );
            default:
                return <div>Error</div>;
        }
    }
}
	
export default ResultadosTAMAI;