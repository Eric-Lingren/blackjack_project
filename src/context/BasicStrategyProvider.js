import React, { Component } from 'react'

const BasicStrategyContext = React.createContext()

class BasicStrategyProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <BasicStrategy.Provider 
                value={{
                    
                }}>
                { this.props.children }
            </BasicStrategy.Provider>
        )
    }
}

export default BasicStrategyProvider


export const withBasicStrategy = C => props => (
    <BasicStrategyContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BasicStrategyContext.Consumer>
)
