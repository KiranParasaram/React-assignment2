import React from "react";
import {Component} from 'react'
import './style.css'

class Employeeform extends Component{

    constructor(){
        super()
        this.state={
            name:'',
            department: '',
            rating: '',

            user: []
        }
    }

    changehandler=(event)=>{

       this.setState({
       [event.target.name]:event.target.value
       })

    }

    clickhandler=(event)=>{
           event.preventDefault()
           console.log(this.state);
  
           const tempobj={     // we have to send this object data into user array in state
               name:this.state.name,
               department:this.state.department,
               rating: this.state.rating
           }
             console.log(tempobj)

           const tempArr = this.state.user   //*****we cannot directly push tempobj into user /so we created tempArr and assign it with user array*****
           tempArr.push(tempobj)    //Then push tempobj into newly created tempArry

           this.setState({
               user:tempArr
           })

        //    console.log(user);
               
    }

    render(){
        
        return(
          
            <div>
            <h1>EMPLOYEE FEEDBACK FORM</h1>

            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' name="name" value={this.state.name} onChange={this.changehandler} /> <br /> <br />

                <label htmlFor="dept">Department: </label>
                <input type="text" id='dept' name="department" value={this.state.dept} onChange={this.changehandler} /> <br /> <br />

                <label htmlFor="rate">Rating: </label>
                <input type="text" id='rate' name="rating" value={this.state.rate} onChange={this.changehandler} /> <br /> <br/>
                {/* console.log(name); */}
               
                <input type="submit" onClick={this.clickhandler} className="btnSub"/>
            </form>
          

         <div className="outerbox">
            {this.state.user.map( (value) =>{
                return(
                    <div className="valuein">
                        Name: {value.name} || Department: {value.department} || Rating: {value.rating}
                    </div>
                )
            })}
         </div> 

            </div>
        )
    }
}

export default Employeeform
