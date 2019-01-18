import React, { Component } from 'react'

const CasinoRulesContext = React.createContext()

class CasinoRulesProvider extends Component {
    constructor(){
        super()
        this.state = {
            dealerStandSoft17: true,
            doubleAfterSplitAllowed: true,
            surrenderAllowed: true,
        }
    }

    render(){
        return (
            <CasinoRulesProvider 
                value={{
                    dealerStandSoft17: this.state.dealerStandSoft17,
                    doubleAfterSplitAllowed: this.state.doubleAfterSplitAllowed,
                    surrenderAllowed: this.state.surrenderAllowed,
                }}>
                { this.props.children }
            </CasinoRulesProvider>
        )
    }
}

export default CasinoRulesProvider


export const withCasinoRules = C => props => (
    <CasinoRulesContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CasinoRulesContext.Consumer>
)
