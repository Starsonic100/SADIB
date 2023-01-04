import React, { Component } from 'react';
import Dibujo from './Dibujo';
import DibujoArbol from './DibujoArbol';
import DibujoPersona from './DibujoPersona';
import Casa from './Casa';
import Arbol from './Arbol';
import Persona from './Persona';
import HTPFinal from './HTPFinal';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';

export class HTPPage extends Component {

    

    state ={
        page: 1,
        p1: '',p2: '',p3: '',p4: '',p5: '',p6: '',p7: '',p8: '',p9: '',p10: '',
        p11: '',p12: '',p13: '',p14: '',p15: '',p16: '',p17: '',p18: '',p19: '',p20: '',
        p21: '',p22: '',p23: '',p24: '',p25: '',p26: '',p27: '',p28: '',p29: '',p30: '',
        p31: '',p32: '',p33: '',p34: '',p35: '',p36: '',p37: '',p38: '',p39: '',p40: '',
        p41: '',p42: '',p43: '',p44: '',p45: '',p46: '',p47: '',p48: '',p49: '',p50: '',
        p51: '',p52: '',p53: '',p54: '',p55: '',p56: '',p57: '',p58: '',p59: '',p60: '',
        p61: '',p62: '',p63: '',p64: '',p65: '',p66: '',p67: '',p68: '',bDc:'', rDc: '',
        bDa: '',rDa: '',bDp: '',rDp:''
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

    guardarDibujos = (p,x) => {
        this.setState({
            [p]:x
        });
        console.log(this.state[p]);
    };

    handleInputChange = input => e =>{
        this.setState({
            [input]:e.target.value
        });
    };

    evaluacion = () =>{
        const navigate = useNavigate();
        Axios.post("http://54.144.147.250:3001/respuestasHTP",{
        respuestas: this.state 
        }).then((response) => {
            alert("Se guardaron sus respuestas");
            console.log(response);
        });
        Axios.post("http://54.144.147.250:3001/resultadosHTP",{
        respuestas: this.state 
        }).then((response) => {
            alert("Se guardaron sus respuestas");
            console.log(response);
        });
        Axios.get("http://54.144.147.250:3001/logout").then((response) => {
            if (response.data === 'SUCCESS') {
            alert("Se redirigirá a la página principal")
            navigate("/");
            navigate(0);
        } else {
            navigate("/");
            navigate(0);
        }
        });
    };

    render(){
        //const { page } = this.state;

        const { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
            p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
            p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
            p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
            p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
            p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
            p61,p62,p63,p64,p65,p66,p67,p68,bDc, rDc,
            bDa,rDa,bDp,rDp} =this.state;

        const values = {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                    p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                    p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                    p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                    p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                    p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                    p61,p62,p63,p64,p65,p66,p67,p68,bDc, rDc,
                    bDa,rDa,bDp,rDp}
        
        switch (this.state.page){
            case 1:
                return (
                    <Dibujo
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        guardarDibujos={this.guardarDibujos}
                        values={values}
                    />
                );
            case 2:
                return (
                    <DibujoArbol
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        guardarDibujos={this.guardarDibujos}
                        values={values}
                    />
                );
            case 3:
                return (
                    <DibujoPersona
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        guardarDibujos={this.guardarDibujos}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Casa
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
            
            case 5:
                return (
                    <Arbol
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
            
            case 6:
                return (
                    <Persona
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );

            case 7:
                return(
                    <HTPFinal
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        evaluacion={this.evaluacion}
                        values={values}
                    />
                );
            
            default:
                return <div>Error</div>;
        }
    }
}
	
export default HTPPage;