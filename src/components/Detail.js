
function Detail({objectData}){

    const {title, list} = objectData;
   // const icon = props.icon;

    return (
        <div className="box has-background-info-light "> 
        <div className="card">
            <header className="card-header ">
                <p className="card-header-title">
                {title}
                </p>
            </header>
            <div className="card-content p-3 has-background-info-light">
                <div className="content">
                <ul>
                    {list.map( obj => 
                    <li key={obj.text}> {obj.icon}  {obj.text} </li> 
                    )}
                 </ul>
                </div>
            </div>
        </div>
        </div>   

    );
}

export default Detail;

