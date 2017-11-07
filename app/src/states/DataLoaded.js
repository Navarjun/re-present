import React, {Component} from 'react'

import Sidebar from '../components/DataLoaded/Sidebar'

export default class DataLoaded extends Component {
    render () {
        return (
            <div id="app">
                <div className="shadow">
                    <Sidebar/>
                </div>
                <div>
                </div>
                <div className="shadow">
                </div>
            </div>
        )
    }
}
