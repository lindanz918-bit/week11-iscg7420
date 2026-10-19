import React, {useState} from 'react';

function Loops(props) {
    const [namelist, setNameList] = useState([]);

    const [name, setName] = useState('');

    function namehandler(e) {
        setName(e.target.value);
    }

    function addName() {
        setNameList([...namelist, name]);
        setName('');
    }

    return (
        <div>
            <h1>Loops Component</h1>
            <p><input type="text" value={name} onChange={namehandler} /></p>
            <p><button onClick={addName}>Add</button></p>
            <url>
                {namelist.map((item_name, index) =>
                    <li key={index}>{item_name}</li>
                )}
            </url>
        </div>
    );
}

export default Loops;