import React, {Component} from 'react'
import {SegmentedControl, SegmentedControlItem, Box} from 'react-desktop'
import DataView from './DataView'

export default class Sidebar extends Component {
    constructor (props) {
        super(props)
        this.state = {state: 'data'}
    }

    render () {
        const ele = this.state.state === 'data'
            ? <DataView/>
            : null
        return (
            <div style={{marginTop: '20px'}}>
                <SegmentedControl>
                    <SegmentedControlItem
                        key={1}
                        title={'Data'}
                        selected={this.state.state === 'data'}
                        onSelect={() => this.setState({ state: 'data' })}
                    >
                    </SegmentedControlItem>

                    <SegmentedControlItem
                        key={2}
                        title={'Visualisation'}
                        selected={this.state.state === 'visualisation'}
                        onSelect={() => this.setState({ selected: 'visualisation' })}
                    >
                    </SegmentedControlItem>
                </SegmentedControl>
                <Box style={{marginTop: '-10px', padding: '10px 15px 10px 15px'}}>
                    {ele}
                </Box>
            </div>
        )
    }
}
