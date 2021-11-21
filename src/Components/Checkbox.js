import './Style.css'
function App(props) {
    function pp(e) {
        console.log(e.target.value);
        props.checkdata(e.target.value);
    }
    return (
        <div className="c-box">
            <h6>Select the Items</h6>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Item1" />
                <label className="form-check-label" >Item 1</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Item2" />
                <label className="form-check-label" > Item 2</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Item3" />
                <label className="form-check-label" > Item 3</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox4" value="Item4" />
                <label className="form-check-label" > Item 4</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox5" value="Item5" />
                <label className="form-check-label" > Item 5</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox6" value="Item6" />
                <label className="form-check-label" > Item 6</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox7" value="Item7" />
                <label className="form-check-label" > Item 7</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox8" value="Item8" />
                <label className="form-check-label" > Item 8</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox9" value="Item9" />
                <label className="form-check-label" > Item 9</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={pp} className="form-check-input" type="checkbox" id="inlineCheckbox10" value="Item10" />
                <label className="form-check-label" > Item 10</label>
            </div>
        </div>
    );
}

export default App;
