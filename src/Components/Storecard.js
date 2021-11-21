function Store(props) {
    function dd1(id){
         props.dd(id);
    }
    return (
        <div className="card" style={{width: "15rem"}}>
        <img src={props.img} className="card-img-top" height="200px" alt="None"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          
          <button onClick={()=>dd1(props.id)} className="btn btn-primary">Show Menu</button>
        </div>
      </div>
    );
  }
  
  export default Store;