import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/basis.scss'
import ButtonPart from './views/button'

class Main extends React.Component {
  render(){
    let element = (
      <div>
        <h2>oIUIo</h2>
        <ButtonPart></ButtonPart>
      </div>
    );
    return element;
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('box')
)