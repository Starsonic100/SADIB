import React, { Component } from 'react';
import TAMAI1 from './TAMAI1';
import TAMAI2 from './TAMAI2';
import TAMAI3 from './TAMAI3';
import TAMAI4 from './TAMAI4';
import TAMAI5 from './TAMAI5';
import TAMAI6 from './TAMAI6';
import TAMAIfinal from './TAMAIfinal';

export class TAMAIPage extends Component {

    state ={
        page: 1,
        p1: 0,p2: 0,p3: 0,p4: 0,p5: 0,p6: 0,p7: 0,p8: 0,p9: 0,p10: 0,
        p11: 0,p12: 0,p13: 0,p14: 0,p15: 0,p16: 0,p17: 0,p18: 0,p19: 0,p20: 0,
        p21: 0,p22: 0,p23: 0,p24: 0,p25: 0,p26: 0,p27: 0,p28: 0,p29: 0,p30:0,
        p31: 0,p32: 0,p33: 0,p34: 0,p35: 0,p36: 0,p37: 0,p38: 0,p39: 0,p40:0,
        p41: 0,p42: 0,p43: 0,p44: 0,p45: 0,p46: 0,p47: 0,p48: 0,p49: 0,p50:0,
        p51: 0,p52: 0,p53: 0,p54: 0,p55: 0,p56: 0,p57: 0,p58: 0,p59: 0,p60:0,
        p61: 0,p62: 0,p63: 0,p64: 0,p65: 0,p66: 0,p67: 0,p68: 0,p69: 0,p70:0,
        p71: 0,p72: 0,p73: 0,p74: 0,p75: 0,p76: 0,p77: 0,p78: 0,p79: 0,p80:0,
        p81: 0,p82: 0,p83: 0,p84: 0,p85: 0,p86: 0,p87: 0,p88: 0,p89: 0,p90:0,
        p91: 0,p92: 0,p93: 0,p94: 0,p95: 0,p96: 0,p97: 0,p98: 0,p99: 0,p100:0,
        p101: 0,p102: 0,p103: 0,p104: 0,p105: 0,p106: 0,p107: 0,p108: 0,p109: 0,p110:0,
        p111: 0,p112: 0,p113: 0,p114: 0,p115: 0,p116: 0,p117: 0,p118: 0,p119: 0,p120:0,
        p121: 0,p122: 0,p123: 0,p124: 0,p125: 0,p126: 0,p127: 0,p128: 0,p129: 0,p130:0,
        p131: 0,p132: 0,p133: 0,p134: 0,p135: 0,p136: 0,p137: 0,p138: 0,p139: 0,p140:0,
        p141: 0,p142: 0,p143: 0,p144: 0,p145: 0,p146: 0,p147: 0,p148: 0,p149: 0,p150:0,
        p151: 0,p152: 0,p153: 0,p154: 0,p155: 0,p156: 0,p157: 0,p158: 0,p159: 0,p160:0,
        p161: 0,p162: 0,p163: 0,p164: 0,p165: 0,p166: 0,p167: 0,p168: 0,p169: 0,p170:0,
        p171: 0,p172: 0,p173: 0,p174: 0,p175: 0
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
                p61,p62,p63,p64,p65,p66,p67,p68,p69,p70,
                p71,p72,p73,p74,p75,p76,p77,p78,p79,p80,
                p81,p82,p83,p84,p85,p86,p87,p88,p89,p90,
                p91,p92,p93,p94,p95,p96,p97,p98,p99,p100,
                p101,p102,p103,p104,p105,p106,p107,p108,p109,p110,
                p111,p112,p113,p114,p115,p116,p117,p118,p119,p120,
                p121,p122,p123,p124,p125,p126,p127,p128,p129,p130,
                p131,p132,p133,p134,p135,p136,p137,p138,p139,p140,
                p141,p142,p143,p144,p145,p146,p147,p148,p149,p150,
                p151,p152,p153,p154,p155,p156,p157,p158,p159,p160,
                p161,p162,p163,p164,p165,p166,p167,p168,p169,p170,
                p171,p172,p173,p174,p175} =this.state;

        const values = {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
                        p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
                        p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
                        p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
                        p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
                        p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
                        p61,p62,p63,p64,p65,p66,p67,p68,p69,p70,
                        p71,p72,p73,p74,p75,p76,p77,p78,p79,p80,
                        p81,p82,p83,p84,p85,p86,p87,p88,p89,p90,
                        p91,p92,p93,p94,p95,p96,p97,p98,p99,p100,
                        p101,p102,p103,p104,p105,p106,p107,p108,p109,p110,
                        p111,p112,p113,p114,p115,p116,p117,p118,p119,p120,
                        p121,p122,p123,p124,p125,p126,p127,p128,p129,p130,
                        p131,p132,p133,p134,p135,p136,p137,p138,p139,p140,
                        p141,p142,p143,p144,p145,p146,p147,p148,p149,p150,
                        p151,p152,p153,p154,p155,p156,p157,p158,p159,p160,
                        p161,p162,p163,p164,p165,p166,p167,p168,p169,p170,
                        p171,p172,p173,p174,p175}
        
        switch (this.state.page){
            case 1:
                return (
                    <TAMAI1
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        values={values}
                    />
                );
            case 2:
                return (
                    <TAMAI2
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
            
            case 3:
                return (
                    <TAMAI3
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );
            
            case 4:
                return (
                    <TAMAI4
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );

            case 5:
                return (
                    <TAMAI5
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );

            case 6:
                return (
                    <TAMAI6
                        handleInputChange={this.handleInputChange}
                        siguiente={this.siguiente}
                        anterior={this.anterior}
                        values={values}
                    />
                );

            case 7:
                return (
                    <TAMAIfinal
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
	
export default TAMAIPage;