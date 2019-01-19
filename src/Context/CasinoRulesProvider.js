import React, { Component } from 'react'

const CasinoRulesContext = React.createContext()

class CasinoRulesProvider extends Component {
    constructor(){
        super()
        this.state = {
            dealerStandsSoft17: true,
            doubleAfterSplitAllowed: true,
            surrenderAllowed: true,
        }
    }

    setGameRules = (name, checked) => {
        this.setState({
            [name]: checked
        })
    }

    render(){
        return (
            <CasinoRulesContext.Provider
                value={{
                    dealerStandsSoft17: this.state.dealerStandsSoft17,
                    doubleAfterSplitAllowed: this.state.doubleAfterSplitAllowed,
                    surrenderAllowed: this.state.surrenderAllowed,
                    setGameRules: this.setGameRules,
                }}>
                { this.props.children }
            </CasinoRulesContext.Provider>
        )
    }
}

export default CasinoRulesProvider


export const withCasinoRules = C => props => (
    <CasinoRulesContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CasinoRulesContext.Consumer>
)
