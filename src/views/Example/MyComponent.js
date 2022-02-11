import React from "react";

/**
 * 
 */
class MyComponent extends React.Component{
    state = {
        name :'Long',
        age : 22
    }

    handleOnChangeName = (event) => {
        console.log(event)
        this.setState({
            name : event.target.value
        })
    }

    handleOnClick = () => {
        alert("Xin chào");
    }

    render(){
        let name = 'Long';
        return (
        <React.Fragment>
        <div> 
            {console.log('My name is: Long')}
            <input value={this.state.name} type="text"
                onChange={(event)=>this.handleOnChangeName(event)}/>
            Xin chào anh : {this.state.name} <br/>
            Tuổi anh: {this.state.age}!
        </div>

        <div className="first">
            <button onClick={() =>this.handleOnClick()}>Click Me!</button>
        </div>
        </React.Fragment>)
    }
}
export default MyComponent;