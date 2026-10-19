import React, {useState} from 'react';

function Forms(props) {
    const [name, setName] = useState('Json');
    const [age, setAge] = useState(0);
    function setValues(name) {
        setName("Lei Song");
        setAge(20);
    }
    function addOne(){
        setAge(age + 1);
    }
    function deleteOne(){
        setAge(age - 1);
    }

    function namehandler(e) {
        setName(e.target.value);
    }
    function agehandler(e) {
        setAge(e.target.value);
    }
    function submit(){
        alert('Name: ' + name + ' Age: ' + age + ", I will send it out");
    }
    return (
        <div>
            <h1>Form Component</h1>
            <p>Name: {name}</p>
            <p>Age: <button onClick={addOne}>+</button>{age}<button onClick={deleteOne}>-</button></p>
            <button onClick={setValues}>Set Name</button>

            <input type="text" value={name} onChange={namehandler} />
            <input type="number" value={age} onChange={agehandler} />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default Forms;