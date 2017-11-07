import React, {Component} from 'react'
import {render} from 'react-dom'
import {Box} from 'react-desktop'

export default class InitialState extends Component {
    render () {
        return (
            <div id="app">
                <div className="shadow">
                    <h1>Wow</h1>
                </div>
                <div>
                </div>
                <div className="shadow">
                </div>
            </div>
        )
    }
}
