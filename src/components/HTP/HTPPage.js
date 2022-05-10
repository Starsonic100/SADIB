import React, { Component } from 'react';
import Dibujo from './Dibujo';
import Casa from './Casa';
import Arbol from './Arbol';
import Persona from './Persona';

export class HTPPage extends Component {

    state ={
        page: 1,
        p1: '',p2: '',p3: '',p4: '',p5: '',p6: '',p7: '',p8: '',p9: '',p10: '',
        p11: '',p12: '',p13: '',p14: '',p15: '',p16: '',p17: '',p18: '',p19: '',p20: '',
        p21: '',p22: '',p23: '',p24: '',p25: '',p26: '',p27: '',p28: '',p29: '',p30: '',
        p31: '',p32: '',p33: '',p34: '',p35: '',p36: '',p37: '',p38: '',p39: '',p40: '',
        p41: '',p42: '',p43: '',p44: '',p45: '',p46: '',p47: '',p48: '',p49: '',p50: '',
        p51: '',p52: '',p53: '',p54: '',p55: '',p56: '',p57: '',p58: '',p59: '',p60: '',
        p61: '',p62: '',p63: '',p64: '',p65: '',p66: '',p67: '',p68: ''
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

        const { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                p61,p62,p63,p64,p65,p66,p67,p68} =this.state;

        const values = {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                        p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                        p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                        p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                        p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                        p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                        p61,p62,p63,p64,p65,p66,p67,p68}
        
        switch (this.state.page){
            case 1:
                return (
                    <Dibujo
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Casa
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
            
            case 3:
                return (
                    <Arbol
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
            
            case 4:
                return (
                    <Persona
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
	
export default HTPPage;