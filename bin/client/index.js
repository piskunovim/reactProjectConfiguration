import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'

class MainComponent extends Component {
    
    render () {
        return (<Fragment>
            Example text to test application
        </Fragment>)
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('app-init')
)