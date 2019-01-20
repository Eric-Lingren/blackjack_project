import React, { Component } from 'react';

const CorrectPlayContext = React.createContext()

class CorrectPlayProvider extends Component {
    constructor(){
        super()
        this.state = {
            correctPlay: '',
        }
    }

    checkSplitHand = (dealerHand, playerHand) => {
        const pHand = playerHand;
        const dHand = dealerHand;
        
        if(pHand === 22){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 20){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 16){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if((pHand === 4 || pHand === 6) && dHand <= 7){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if((pHand === 4 || pHand === 6) && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 8 && dHand <= 4){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 8 && dHand <= 6){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 8 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 12 && dHand <= 6){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 12 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 14 && dHand <= 7){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 14 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 18 & (dHand === 7 || dHand === 10 || dHand === 11 ) ){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        }  else if (pHand === 18 && dHand <= 9 ){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        }
    }
    
    checkSoftHand = (dealerHand, playerHand) => {
        const pHand = playerHand;
        const dHand = dealerHand;

        if (pHand >= 19){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if(pHand === 13 && dHand <= 4){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 13 && dHand <= 6){
            console.log('the correct play is DOUBLE.  Else Hit.')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 13 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 14 && dHand <= 4){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 14 && dHand <= 6){
            console.log('the correct play is DOUBLE.  Else Hit.')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 14 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 15 && dHand <= 3){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 15 && dHand <= 6){
            console.log('the correct play is DOUBLE.  Else Hit.')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 15 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        }  else if(pHand === 16 && dHand <= 3){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 16 && dHand <= 6){
            console.log('the correct play is DOUBLE.  Else Hit.')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 16 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 17 && dHand === 2){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 17 && dHand <= 6){
            console.log('the correct play is DOUBLE.  Else Hit.')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 17 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 18 && dHand === 2){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 18 && dHand <= 6){
            console.log('the correct play is DOUBLE.  Else Stand.')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 18 && dHand <= 8){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if(pHand === 18 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        }
    }
    
    checkHardHand = (dealerHand, playerHand) => {
        const pHand = playerHand;
        const dHand = dealerHand;

        if (pHand <= 8 ){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand >= 17) {
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        }else if (pHand === 9 && dHand === 2){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand <= 9 && dHand <= 6){
            console.log('the correct Play is DOUBLE')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if(pHand === 9 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 10 && dHand <= 9){
            console.log('the correct Play is DOUBLE')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if (pHand === 10 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 11 && dHand <= 10){
            console.log('the correct Play is DOUBLE')
            this.setState({
                correctPlay: 'DOUBLE',
            })
        } else if (pHand === 11 && dHand === 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 12 && dHand <= 3){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 12 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if(pHand === 12 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 13 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 13 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 14 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 14 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 15 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 15 && dHand <= 9){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 15 && dHand === 10){
            console.log('the correct Play is SURRENDER (else hit)')
            this.setState({
                correctPlay: 'SURRENDER',
            })
        } else if (pHand === 15 && dHand === 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 16 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 16 && dHand <= 8){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        }  else if (pHand === 16 && dHand <= 11){
            console.log('the correct Play is SURRENDER (else hit)')
            this.setState({
                correctPlay: 'SURRENDER',
            })
        }
    }



    render(){
        return (
            <CorrectPlayContext.Provider 
                value={{
                    checkSplitHand: this.checkSplitHand,
                    checkSoftHand: this.checkSoftHand,
                    checkHardHand: this.checkHardHand,
                    correctPlay: this.state.correctPlay,
                }}>
                { this.props.children }
            </CorrectPlayContext.Provider>
        )
    }
}

export default CorrectPlayProvider


export const withCorrectPlay = C => props => (
    <CorrectPlayContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CorrectPlayContext.Consumer>
)
