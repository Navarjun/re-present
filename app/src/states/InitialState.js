import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-desktop'
import {} from './InitialState.css'
import fs from 'fs'
import {remote} from 'electron'
import * as CSV from 'csv-string'
import * as async from 'async'
import {Table} from '../data/Table'

export default class InitialState extends Component {

    constructor (props) {
        super(props)
        this.state = {
            state: 'initial'
        }
    }

    render () {
        const loadData = () => {
            remote.dialog.showOpenDialog((fileNames) => {
                if (fileNames === undefined) return
                var fileName = fileNames[0]
                
                // Change state to 'loading'
                this.setState({ state: 'loading' })
                async.series([
                    function (callback) {
                        fs.readFile(fileName, 'utf-8', function (err, data) {
                            if (err) {
                                callback(err)
                                return
                            }
                            const parsedData = CSV.parse(data)
                            callback(null, parsedData)
                        })
                    }
                ], (err, data) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    data = data[0]
                    const colNames = data.shift()
                    const table = new Table(colNames, data)
                    this.props.dataLoaded(table)
                })
                
            }) 
        }

        return (
            <div id="app">
                <div className="center">
                    <p>
                        {"Let's start by importing some data"}
                    </p>
                    <p>
                        {this.state.state === 'initial'
                            ? <Button onClick={loadData}>
                                Load Data
                            </Button>
                            : null
                        }
                    </p>
                </div>
            </div>
        )
    }
}

InitialState.propTypes = {
    dataLoaded: PropTypes.func
}
