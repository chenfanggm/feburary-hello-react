import React from 'react'
import ReactDOM from 'react-dom'


const MOUNT_NODE = document.getElementById('root')

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 20
    }
  }
  
  renderButton() {
    return [1, 2, 3]
  }

  render() {
    const { name } = this.props
    const { age } = this.state
    return (
      <div>
        Hello {name || 'User'} at age: {age}

      </div>
    )
  }
}

ReactDOM.render(
  <Hello name={'CHen'}></Hello>,
  MOUNT_NODE
)



















import './normalize'
import routes from './routes'
import AppContainer from './containers/AppContainer'




const helloWorld = (props) => {
  return (
    <div>Hello {props.name || 'User'}</div>
  )
}

const AgeButton = ({ name, age }) => (
  <button onClick={() => { window.alert(`User ${name} is at age ${age}!`) }}>
    Age: {age}
  </button>
)

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 20
    }
  }

  render() {
    const buttons = [1, 2, 3].map((age, index) => {
      return (
        <AgeButton key={index}
                   name={this.props.children}
                   age={age} />
      )
    })
    return (
      <div>
        <div>Hello {this.props.children || 'User'}.</div>
        {buttons}
      </div>
    )
  }
}






// --------------------------------------
// Render Setup
// --------------------------------------
let render = () => {
  ReactDOM.render(
    <AppContainer routes={routes} />,
    MOUNT_NODE
  )
}

// Development Tools
if (__DEV__) {
  if (module.hot) {
    const renderError = (error) => {
      const RedBox = require('redbox-react').default
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    const renderApp = render
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./containers/AppContainer', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// --------------------------------------
// Go!
// --------------------------------------
//render()
