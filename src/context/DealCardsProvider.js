import React, { Component } from 'react'
import axios from 'axios';

const DealCardsContext = React.createContext()

class DealCardsProvider extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
        }
    }

    getDecks = () => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    render(){
        return (
            <DealCardsContext.Provider
                value={{

                }}>
                { this.props.children }
            </DealCardsContext.Provider>
        )
    }
}

export default DealCardsProvider


export const withDealCards = C => props => (
    <DealCardsContext.Consumer>
        {value => <C {...props} {...value}/>}
    </DealCardsContext.Consumer>
)
