import * as React from "react"
import { Dialog } from "@reach/dialog";
import './ConfirmDialogue.css';

export default class ConfirmStatusChange extends React.Component {
    state = {
      open: false,
      callback: null,
    }
  
    dialogueShow = callback => event => {
      event.preventDefault()
      event = {
        ...event,
        target: { ...event.target, value: event.target.value }
      }
      this.setState({
        open: true,
        callback: () => callback(event)
      })
    }
  
    dialogueHide = () => 
    this.setState({ 
        open: false,
        callback: null })
  
    confirm = () => {
      this.state.callback()
      this.dialogueHide()
    }
  
    render() {
      return (
        <React.Fragment>
        {this.props.children(this.dialogueShow)}
        {this.state.open && (
            <Dialog className="DialogueBox">
              {/* <h1>{this.props.title}</h1>
              <p>{this.props.description}</p> */}
              <div className="DialogueBoxContent">
              <h3 className="SaveChanges">save changes...?</h3>
              <div className="Buttons">
              <button className="CancelButton" onClick={this.dialogueHide}>No</button>
              <button className="OkButton" onClick={this.confirm}>Yes</button>
              </div>
              </div>
            </Dialog>
        )}
        </React.Fragment>
      )
    }
  }
  
