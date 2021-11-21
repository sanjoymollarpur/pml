import arr from './Data'
function Menucard(props) {
    let v=1+ parseInt(props.val);
    console.log(props.val,v);
    return (
        <div>
            <h4>Store {v} menu card</h4>
            <table className="table w-25 m-auto border">
                <thead className="border">
                    <tr className="border">
                        
                        <th className="border" scope="col">Item</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="border">
                    <tr>
                        <td className="border">Item 1</td>
                        <td>{arr[props.val].Item1}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 2</td>
                        <td>{arr[props.val].Item2}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 3</td>
                        <td>{arr[props.val].Item3}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 4</td>
                        <td>{arr[props.val].Item4}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 5</td>
                        <td>{arr[props.val].Item5}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 6</td>
                        <td>{arr[props.val].Item6}</td> 
                    </tr>
                    <tr>
                        <td className="border"> Item 7</td>
                        <td>{arr[props.val].Item7}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 8</td>
                        <td>{arr[props.val].Item8}</td> 
                    </tr>
                    <tr>
                        <td className="border">Item 9</td>
                        <td>{arr[props.val].Item9}</td> 
                    </tr>
                    <tr>
                        <td className="border"> Item 10</td>
                        <td>{arr[props.val].Item10}</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Menucard;