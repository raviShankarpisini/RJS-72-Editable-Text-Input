import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {editMode: true, inputValue: ''}

  changeMode = () =>
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }))

  onChangeInput = event => this.setState({inputValue: event.target.value})

  renderEditMode = () => {
    const {editMode, inputValue} = this.state

    return editMode ? (
      <div>
        <input type="text" value={inputValue} onChange={this.onChangeInput} />
        <button type="button" onClick={this.changeMode}>
          Save
        </button>
      </div>
    ) : (
      <div>
        <p>{inputValue}</p>
        <button type="button" onClick={this.changeMode}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          {this.renderEditMode()}
        </div>
      </div>
    )
  }
}

export default App
