import React, {Component} from 'react'
import {render} from 'react-dom'
import {SegmentedControl, SegmentedControlItem, Box} from 'react-desktop'

export default class Sidebar extends Component {
    render () {
        return (
            <div style={{marginTop: '20px'}}>
                <SegmentedControl>
                    <SegmentedControlItem
                        key={1}
                        title={'Data'}
                        selected={false}
                        onSelect={() => this.setState({ selected: 1 })}
                    >
                        {'Data'}
                    </SegmentedControlItem>

                    <SegmentedControlItem
                        key={2}
                        title={'Visualisation'}
                        selected={false}
                        onSelect={() => this.setState({ selected: 2 })}
                    >
                        {'Visualisation'}
                    </SegmentedControlItem>
                </SegmentedControl>
                <Box>
                </Box>
            </div>
        )
    }
}
