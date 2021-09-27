import React, { Component } from 'react';
import print from './print'

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            age: '',
            topic: '',
            exp: '',
            contact: '',
            email: '',
            interest: ''
        }
    }

    handleChangeName = (event) => {
        this.setState(
            {
                username: event.target.value,
            }
        )
    }

    handleChangeAge = (event) => {
        this.setState(
            {
                age:event.target.value,
            }
        )
    }

    handleChangeTopic = (event) => {
        this.setState(
            {
                topic:event.target.value
            }
        )
    }

    handleChangeExp = (event) => {
        this.setState(
            {
                exp:event.target.value
            }
        )
    }

    handleChangeContact = (event) => {
        this.setState(
            {
                contact:event.target.value
            }
        )
    }

    handleChangeEmail = (event) => {
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    handleChangeInterests = (event) => {
        this.setState(
            {
                interest:event.target.value
            }
        )
    }
    
    handleSubmit = (event) => {
        alert(`Form is submitted`);
        <print
        name="${this.state.username}" 
        age="${this.state.age}" 
        topic="${this.state.topic}"
        experience="${this.state.exp}"
        contact="${this.state.contact}" 
        email="${this.state.email}"
        interests="${this.state.interest}"/>
      event.preventDefault();
    }

    render() {
        return(
            <div className="maindiv">
            <form className="FORM" onSubmit={this.handleSubmit}>
            <h1>Survey FORM</h1>
            <div>
                <label>Name</label><br />
                <input
                className="inputtext"
                 type="text"
                 placeholder="Your Name"
                 value={this.state.username} 
                 onChange={this.handleChangeName}></input>
            </div><br />
            <div>
                <label>Age</label><br />
                <input
                    className="inputtext"
                    type="text"
                    placeholder=" Your Age"
                    value={this.state.age}
                    onChange={this.handleChangeAge}
                ></input>
            </div><br />
            <div>
                <label> Topic</label><br />
                <select className="select" value={this.state.topic} onChange={this.handleChangeTopic}>
                    <option value="React">React</option>
                    <option value="CSS">CSS</option>
                    <option value="Angular">Angular</option>
                </select>
            </div><br />
            <div>
                <label>Experience</label><br />
                <input
                className="inputtext"
                    type="text"
                    placeholder="In Years"
                    value={this.state.exp}
                    onChange={this.handleChangeExp}
                ></input>
            </div><br />
            <div>
                <label>Contact</label><br />
                <input
                    className="inputtext"
                    type="text"
                    placeholder=" Your Age"
                    value={this.state.contact}
                    onChange={this.handleChangeContact}
                ></input>
            </div><br />
            <div>
                <label>E-Mail</label><br />
                <input
                    className="inputtext"
                    type="email"
                    placeholder=" Your Age"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                ></input>
            </div><br />
            <div>
                <label>Other Interests</label><br />
                <input
                    className="inputtext"
                    type="text"
                    placeholder=" Your Age"
                    value={this.state.interest}
                    onChange={this.handleChangeInterests}
                ></input>
            </div><br />
            
            <button className="submit" type="submit" >Submit</button>
            </form>
            </div>
        )
    }

}

export default Form;