import * as React from "react"
import { Dialog } from "@reach/dialog";
import './ConfirmDialogue.css';

class ConfirmDialogueEdit extends React.Component{
    state={
        editDialogueOpen: false,
        callback: null
    }
    
    editDialogueShow = callback => event => {
        event.preventDefault()
        event = {
            ...event,
            target: {...event.target,
            value: event.target.value
            }
        }
        this.setState({
            editDialogueOpen: true,
            callback: () => callback(event)
        })
    }

    editDialogueHide = () => 
    this.setState({
        editDialogueOpen: false,
        callback: null
    })

    editConfirm = () => {
        this.state.callback()
        this.editDialogueHide()
    }

    render(){
        return(
            <section>
                {this.props.children(this.editDialogueShow)}
                {this.state.editDialogueOpen && (
                    <Dialog className="DialogueBox">
                    {/* <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p> */}
                    <div className="DialogueBoxContent">
                    <h3 className="SaveChanges">Do you want to edit...?</h3>
                    <div className="Buttons">
                    <button className="CancelButton" onClick={this.editDialogueHide}>No</button>
                    <button className="OkButton" onClick={this.editConfirm}>Yes</button>
                    </div>
                    </div>
                    </Dialog>
                )}
            </section>
        )
    }
}

export default ConfirmDialogueEdit;