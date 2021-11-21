import Storecard from "./Storecard";
import './Style.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img6.jpeg'
import Menucard from "./Menucard";
import Checkbox from "./Checkbox";
import {useState} from 'react'; 
import arr from './Data'
//import arr from './Data'

let uarr=[];
function Store() {
    const [idpull, setidpull] = useState(0);
    const [idpull1, setidpull1] = useState(false);
    const [cdata, setcdata] = useState([]);
    const [cost, setcost] = useState([]);
    
    function toggleMene(id){
            console.log(id);
            setidpull(id);
            if(idpull1===true)
            setidpull1(false)
            else{
                setidpull1(true);
            }
    }
    function checkdata(opt){
          //console.log("ppp", opt);
          setcdata((prev)=>{
              return [...prev,opt];
          })
          
        
    }
    function costf(){
        uarr = cdata.filter(function(item, pos) {
            return cdata.indexOf(item) === pos;
        })
        let i1=uarr.reduce((val,index)=>val+arr[0][index],0);
        let i2=uarr.reduce((val,index)=>val+arr[1][index],0);
        let i3=uarr.reduce((val,index)=>val+arr[2][index],0);
        let i4=uarr.reduce((val,index)=>val+arr[3][index],0);
        let i5=uarr.reduce((val,index)=>val+arr[4][index],0);
        console.log(arr[0][uarr[0]], i1);
        let c=999999,ind=-1,p=[i1,i2,i3,i4,i5];
        for(let i=0;i<5;i++){
              if(p[i]<c)
              {
                  c=p[i];
                  ind=i+1;
              }
        }
        setcost([i1,i2,i3,i4,i5,c,ind]);
    }
    console.log(cdata);
    
    return (
        <div className="container1">
            <h4>WELCOME TO STORES</h4>
            {idpull1? 
            <div>
            <Menucard val={idpull}/> 
             <button className="btn btn-primary" onClick={toggleMene}> Go Back</button>
            </div>: 

        <div className="card-container">
            <Storecard img={img1} dd={toggleMene} id="0" title="Store 1"/>
            <Storecard img={img2} dd={toggleMene} id="1" title="Store 2"/>
            <Storecard img={img3} dd={toggleMene} id="2" title="Store 3"/>
            <Storecard img={img4} dd={toggleMene} id="3" title="Store 4"/>
            <Storecard img={img5} dd={toggleMene} id="4" title="Store 5"/>
        </div>}
        <Checkbox checkdata={checkdata}/>
        <div>
        <table className="table w-25 m-auto border">
                <thead className="border">
                    <tr className="border">
                        
                        <th className="border" scope="col">Store</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="border">
                    <tr>
                        <td className="border">Store 1</td>
                        <td>{cost[0]}</td> 
                    </tr>
                    <tr>
                        <td className="border">Store 2</td>
                        <td>{cost[1]}</td> 
                    </tr>
                    <tr>
                        <td className="border">Store 3</td>
                        <td>{cost[2]}</td> 
                    </tr>
                    <tr>
                        <td className="border">Store 4</td>
                        <td>{cost[3]}</td> 
                    </tr>
                    <tr>
                        <td className="border">Store 5</td>
                        <td>{cost[4]}</td> 
                    </tr>
                    
                </tbody>
            </table>
            <h4>Minimum cost {cost[5]} of the Store {cost[6]}</h4>
        </div>
        <button onClick={costf} className="btn btn-success">See Cost</button>
        
        </div>
    );
  }
  
  export default Store;