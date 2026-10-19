// type sfc and enter
import React from 'react';
import Fetchdata from './Fetchdata';
import Helloworld2 from './Helloworld2';
import Forms from './Forms';
import Conditions from './Conditions';
import Loops from './Loops';

function clickMe() {
    alert('Hello World -  from Helloworld');
}

function Helloworld(props) {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>From function based component</h2>
            <button onClick={clickMe}>Click Me</button>
            <button onClick={props.clickMe}>Click Me from App</button>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <Helloworld2 clickMe={clickMe} name="Json" age={20}/>
            <Forms/>
            <Conditions/>
            <Loops/>
            <Fetchdata/>

        </div>
    );
}

export default Helloworld;