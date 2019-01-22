import React, {Component} from 'react';
import axios from 'axios';
import {withCorrectPlay} from './context/CorrectPlayProvider';
import BasicStrategyStatsModal from './components/BasicStrategyStatsModal/BasicStrategyStatsModal'

class TrainBasicStrategy extends Component {
    constructor(props){
        super(props)
        this.state = {
            deckID: '',
            dealerHand: '',
            dealerImages: '',
            playerCard1: '',
            playerCard2: '',
            playerImage1: '',
            playerImage2: '',
            playerCard1IsAce : false,
            playerCard2IsAce : false,
            pCard1Number: '',
            pCard2Number: '',
            dHand: '',
            pHand: '',
            options: ['HIT', 'STAND', 'DOUBLE', 'SPLIT', 'SURRENDER'],
            playerGuess: '',
            buttonList: '',
            buttonClass: 'checkButton',
            bottomMargin: '18px',
            remainingCardsInDeck: 0,
        }
    }
    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    dealCard = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=3`).then(response => {
            
            const dealerCardValue = response.data.cards[0].value  
            const playerCardValue1 = response.data.cards[1].value  
            const playerCardValue2 = response.data.cards[2].value  
            const dealerCardImage = response.data.cards[0].image
            const playerCardImage1 = response.data.cards[1].image
            const playerCardImage2 = response.data.cards[2].image
            const hands = ['Hit', 'Stand', 'Double', 'Split', 'Surrender']
            const options = hands.map(hand => <button className='checkButton' onClick={this.checkButton} id='notSelected' 
                            name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>)

            this.setState({
                dealerHand: dealerCardValue,
                dealerImages: dealerCardImage,
                playerCard1: playerCardValue1, 
                playerCard2: playerCardValue2,
                playerImage1: playerCardImage1, 
                playerImage2: playerCardImage2,
                remainingCardsInDeck: response.data.remaining,
                buttonList: options
            }, () => this.showCardData() )
        })
    }

    showCardData = () => {
        if(this.state.remainingCardsInDeck <= 5){
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/shuffle/`).then(response => {
            })
        }
        const dCard = this.state.dealerHand;
        let dCardNumber = 0
        const pCard1 = this.state.playerCard1;
        let pCard1Number = 0
        const pCard2 = this.state.playerCard2;
        let pCard2Number = 0

        //  Sets the proper numberical values to dealer hand for future evaluation
        if (dCard === 'JACK' ||dCard === 'QUEEN' || dCard === 'KING' ){
            dCardNumber  = 10
            this.setState({
                dHand: dCardNumber
            })
        } else if (dCard === 'ACE') {
            dCardNumber  = 11
            this.setState({
                dhand: dCardNumber
            })
        } else {
            dCardNumber  = dCard
            this.setState({
                dhand: dCardNumber
            })
        }

        //  Sets the proper numberical values to player card 1 for future evaluation
        if (pCard1 === 'JACK' ||pCard1 === 'QUEEN' || pCard1 === 'KING' ){
            pCard1Number  = 10
        } else if (pCard1 === 'ACE' ) {
            pCard1Number  = 11
            this.setState({
                playerCard1IsAce: true,
            })
        } else {
            pCard1Number = pCard1 
        }

        //  Sets the proper numerical values to player card 2 for future evaluation
        if (pCard2 === 'JACK' ||pCard2 === 'QUEEN' || pCard2 === 'KING' ){
            pCard2Number  = 10
        } else if (pCard2 === 'ACE' ) {
            pCard2Number  = 11
            this.setState({
                playerCard2IsAce: true,
            })
        } else {
            pCard2Number = pCard2 
        }

        //  Sums the 2 player cards into 1 hand value
        const pHand = parseInt(pCard1Number) +  parseInt(pCard2Number)
        const dHand = dCardNumber

        //  Sets state of values parsed above for other functions to access.
        this.setState({
            pHand: pHand,
            dHand: dHand,
            pCard1Number: pCard1Number,
            pCard2Number: pCard2Number,
        }, () => this.whatCheckHandFunctionToRun() )
    }

    whatCheckHandFunctionToRun = () => {
        const pCard1Number = parseInt(this.state.pCard1Number)
        const pCard2Number = parseInt(this.state.pCard2Number)
    
        let dealerHand = parseInt(this.state.dHand)
        let playerHand = parseInt(this.state.pHand)

        if (pCard1Number === pCard2Number ){
            this.props.checkSplitHand(dealerHand, playerHand)
        } else if (pCard1Number === 11 || pCard2Number === 11){
            this.props.checkSoftHand(dealerHand, playerHand)
        } else {
            this.props.checkHardHand(dealerHand, playerHand)
        }
    }

    checkButton = (e) => {
        const answer = this.props.correctPlay
        const guess = e.target.value
        const hands = ['Hit', 'Stand', 'Double', 'Split', 'Surrender']
        const buttons = hands.map(hand => {
            if(guess === answer && hand.toUpperCase() === answer){
                this.sendUpdatedPlayerStatsToProvider(true)
                return (
                    <button className='checkButton' onClick={this.checkButton} id='correct' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
                )
            }else if (hand.toUpperCase() === answer){
                this.sendUpdatedPlayerStatsToProvider(false)
                return (
                    <button className='checkButton' onClick={this.checkButton} id='correct' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
                )
            }else if(guess === hand.toUpperCase()) {
                return (
                    <button className='checkButton' onClick={this.checkButton} id='wrong' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
                )
            }else {
                return (
                    <button className='checkButton' onClick={this.checkButton} id='notSelected' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
                )
            }
        })

        this.setState({buttonList: buttons, buttonClass: 'checkButtonOff', bottomMargin: '0px'})
    }

    sendUpdatedPlayerStatsToProvider = (playerWasCorrect) => {
        let currentHandType = this.props.currentKindOfHandBeingPlayed
        this.props.setCorrectHandsPlayed(playerWasCorrect, currentHandType)
    }

    checkStats = () => {
        this.props.toggleBasicStrategyStats()
    }

    handleRulesCheckbox = (e) => {
        let name = e.target.name
        let checked = e.target.checked
        this.props.setCorrectPlayRules(name, checked)
    }

    render() {
        return ( 
            <div className='trainingWrapper'>
                <div className='container'>
                <h1 className='trainDrillSubtitle'>Basic Strategy Drill</h1>
                <h4 className='casino-rules-heading'>Choose your Casino Rules:</h4>
                <form onChange={this.handleRulesCheckbox} className='casino-rules-form'>
                    <input  className='rules-checkbox' 
                            name='dealerStandsSoft17' 
                            type='checkbox'>
                    </input> Dealer stand's on soft 17
                    <br></br>
                    <input  className='rules-checkbox'
                            name='doubleAllowed' 
                            type='checkbox'>
                    </input>  Double allowed
                    <br></br>
                    <input  className='rules-checkbox'
                            name='doubleAfterSplitAllowed' 
                            type='checkbox'>
                    </input>  Double after split allowed
                    <br></br>
                    <input  className='rules-checkbox' 
                            name='surrenderAllowed' 
                            type='checkbox'>
                    </input>  Surrender allowed
                    <br></br>
                </form>
                <h3 className='handDescription'>Dealer Hand</h3>
                
                    <div className='dealerHandBS'>
                        <img className='cardBS' src={this.state.dealerImages} alt=''></img>
                    </div>

                    <div className='playerHandBS'>
                        <img  className='cardBS' src={this.state.playerImage1} alt=''></img>
                        <img  className='cardBS' src={this.state.playerImage2} alt=''></img>
                    </div>

                    <h3 className='handDescription'>Player Hand</h3>
                    <div className='basicStrategyButtonWrapper'>
                        <h2 style={{marginBottom: this.state.bottomMargin}}>Choose the correct play:</h2>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonHit' name='HIT' value='HIT' >Hit</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonStand' name='STAND' value='STAND' >Stand</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonDouble' name='DOUBLE' value='DOUBLE' >Double</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonSplit' name='SPLIT' value='SPLIT' >Split</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonSurrender' name='SURRENDER' value='SURRENDER' >Surrender</button> <br></br>
                        {this.state.buttonList}
                        <button className='dealBSButton' onClick={this.dealCard}>Deal</button>
                        <button className='check-stats-button' onClick={this.checkStats}>Check Stats</button>
                    </div>
                    <BasicStrategyStatsModal />
                </div>
            </div>
        )
    }
}

export default withCorrectPlay(TrainBasicStrategy)