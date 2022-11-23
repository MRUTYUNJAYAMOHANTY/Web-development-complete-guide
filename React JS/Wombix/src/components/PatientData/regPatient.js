import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import {storage} from '../../firebase';

class RegPatient extends PureComponent {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('PatientList');
        this.state = {
          name: '',
          number: '',
          dob:'',
          image: null,
          url:''
        };
        this.onChange = this.onChange.bind(this);
        this.imgaeHandleChange = this.imgaeHandleChange.bind(this);
      }
      onChange = event =>  {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };
     imgaeHandleChange(e){
        if(e.target.files[0]){
            const image = e.target.files[0]
            this.setState(()=> ({image}))
        }
     }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { name, number, dob, image, url } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot)=>{

        },
        (error) => {
            console.log(error)
        }, 
        ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url})
            })
        });
        this.ref.add({
          name,
          number,
          dob,
          url
        }).then((docRef) => {
          this.setState({
            name:'',
            number:'',
            dob:'',
            url:''
          });
          this.props.history.push("/PatientList")
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
    render() {
        const { name, number, dob, url } = this.state;
        return (
            <section>
                  <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="name"/>
                    <input type="text" class="form-control" name="number" value={number} onChange={this.onChange} placeholder="number"/>
                    <input type="date" class="form-control" name="dob" value={dob} onChange={this.onChange} placeholder="dob" />
                    <input type="file" value={url} onChange={this.imgaeHandleChange} />
                  </div>
                  <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </section>
        )
    }
}

export default RegPatient;