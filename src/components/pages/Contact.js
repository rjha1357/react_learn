import React, { Component } from 'react';
import axios from 'axios';

//  function Contact() {
export default class Contact extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            persons: []
          }
    }
     

    //   componentDidMount() {
    //     axios.get(`https://wordpress.betadelivery.com/react_CI_learn/`)
    //     .then(res => res.json())
    //     .then(persons => console.log(persons));
    //   }

    componentDidMount() {
        axios.get(`https://wordpress.betadelivery.com/react_CI_learn/index.php/api/Users`)
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    persons: data
                });
            }).catch(err => console.log(err));
        }

    render() {
        //const { persons } = this.state;
    return(
       <React.Fragment>
            <div>
            {Object.keys(this.state.persons).length != 0 ? this.state.persons.getcontactdata.map(person => {
                return <ul key={person.id}>
                         <li>{person.name}</li>
                         <li>{person.email}</li>
                        </ul>
                }): <p></p>}  
        </div>
        </React.Fragment>
        
    )}
}