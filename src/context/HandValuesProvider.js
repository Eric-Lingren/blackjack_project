import React, { Component } from 'react'

const HandValuesContext = React.createContext()

class HandValuesProvider extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return (
            <HandValuesContext.Provider
                value={{

                }}>
                { this.props.children }
            </HandValuesContext.Provider>
        )
    }
}

export default HandValuesProvider


export const withHandValues = C => props => (
    <HandValuesContext.Consumer>
        {value => <C {...props} {...value}/>}
    </HandValuesContext.Consumer>
)
