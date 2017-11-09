import React, {Component} from 'react'
import {} from './styles/global.css'
import Logo from './components/Logo.jsx'
import InitialState from './states/InitialState.js'
import DataLoaded from './states/DataLoaded'

import * as DM from './data/DataManager'

const logos = [
    require('./assets/electron.png'),
    require('./assets/react.png'),
    require('./assets/webpack.png')
]

export default class App extends Component {
    constructor (props) {
        super(props)
        this.state = {state: 'initial', data: null}
    }

    render () {
        const logosRender = logos.map((logo, index) => {
            return <Logo key = {index} src = { logo } />
        })
        
        const dataLoaded = (data) => {
            DM.setData(data)
            this.setState({state: 'dataLoaded'})
        }

        const ele = (this.state.state === 'initial')
            ? <InitialState dataLoaded={dataLoaded}/>
            : <DataLoaded/>

        return ele
    }
}
