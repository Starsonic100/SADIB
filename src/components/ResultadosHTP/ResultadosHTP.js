import React, { Component } from 'react';

import ResultadosCasa from './ResultadosCasa';
import ResultadosArbol from './ResultadosArbol';
import ResultadosPersona from './ResultadosPersona';
export class ResultadosHTP extends Component {

    state ={
        page: 1,
        r1:'',r2:'',r3:'',r4:'',r5:'',r6:'',r7:'',r8:'',r9:'',r10:'',
        r11:'',r12:'',r13:'',r14:'',r15:'',r16:'',r17:'',r18:'',r19:'',r20:'',
        r21:'',r22:'',r23:'',r24:'',r25:'',r26:'',r27:'',r28:'',r29:'',r30:'',
        r31:'',r32:'',r33:'',r34:'',r35:'',r36:'',r37:'',r38:'',r39:'',r40:'',
        r41:'',r42:'',r43:'',r44:'',r45:'',r46:'',r47:'',r48:'',r49:'',r50:'',
        r51:'',r52:'',r53:'',r54:'',r55:'',r56:'',r57:'',r58:'',r59:'',r60:'',
        r61:'',r62:'',r63:'',r64:'',r65:'',r66:'',r67:''
        
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

        const {r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,
        r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,
        r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,
        r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,
        r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,
        r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,
        r61,r62,r63,r64,r65,r66,r67} =this.state;
        const values = {r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,
            r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,
            r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,
            r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,
            r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,
            r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,
            r61,r62,r63,r64,r65,r66,r67}
        
        switch (this.state.page){
            case 1:
                return (
                    <ResultadosCasa
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        values={values}
                    />
                );
            case 2:
                return (
                    <ResultadosArbol
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                />
                );
            
            case 3:
                return (
                    <ResultadosPersona
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
	
export default ResultadosHTP;