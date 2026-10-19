import React, {useState} from 'react';

function Conditions(props) {
    const [temperature, setTemperature] = useState(0);

    const [paragraph, setParagraph] = useState('');

    function paragraphhandler(e) {
        setParagraph(e.target.value);
    }
    function temperaturehandler(e) {
        setTemperature(e.target.value);
    }

    return (
        <div>
            <h1>Conditions Component</h1>
            <p>Temperature: {temperature}</p>
            <input type="number" value={temperature} onChange={temperaturehandler} />
            <p>Temperature: {temperature}</p>
            <p>Condition: {temperature > 30 ? "Hot" : "Cold"}</p>
            <p><textarea value={paragraph} onChange={paragraphhandler} cols="30" rows="10"></textarea></p>
            <p>{paragraph}</p>
        </div>
    );
}

export default Conditions;