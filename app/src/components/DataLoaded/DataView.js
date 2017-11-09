import React, {Component} from 'react'
import {ListView, ListViewSection, Text} from 'react-desktop'
import * as DM from '../../data/DataManager'

export default class DataView extends Component {
    constructor (props) {
        super(props)
        this.state = {state: 'view'}
    }

    render () {
        const dataElements = DM.table.colNames.map((colName, i) => {
            return (
                <Text key={i}>
                    {colName}
                </Text>
            )
        })

        return (
            <div>
                <ListView background="#f1f2f4" width="240" height="200">
                    <ListViewSection>
                        {dataElements}
                    </ListViewSection>
                </ListView>
            </div>
        )
    }
}
