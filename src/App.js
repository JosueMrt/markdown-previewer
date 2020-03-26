import React from 'react';
import './App.css';
import welcomeMsg from './welcomeMsg';
import Editor from './components/editor'
import Preview from './components/preview'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: welcomeMsg
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() { 
    return ( 
      <div className="App">
        <Editor handleChange={this.handleChange} input={this.state.input}/>
        <Preview input={this.state.input}/>
      </div>
     );
  }
}
 
export default App;
