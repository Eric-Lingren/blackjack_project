import React, { Component } from 'react'
import axios from 'axios'

const BasicStrategyContext = React.createContext()

class BasicStrategyProvider extends Component {
    constructor(){
        super()
        this.state = {
        }
    }
 


    render(){
        return (
            <BasicStrategyContext.Provider 
                value={{

                }}>
                { this.props.children }
            </BasicStrategyContext.Provider>
        )
    }
}

export default BasicStrategyProvider


export const withBasicStrategy = C => props => (
    <BasicStrategyContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BasicStrategyContext.Consumer>
)
