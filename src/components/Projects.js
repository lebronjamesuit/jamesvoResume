import Tech from "./Tech";

function Project({ projectData }) {
  const { title, list } = projectData;
  // const icon = props.icon;

  return (
<div className="box has-background-info-light"> 
  <div className="card">
      <header className="card-header">
        <p className="card-header-title">
           <span>  {title} </span>
        </p> 
      </header>
      <div className="card-content has-background-info-light">
        <div className="content ">
          <ul>
          {list.map((item) => (
            <li key={item.name}>
              <div className="box"> 
              
                <div className="has-text-weight-semibold"> {item.name}</div>   
                <p>Stack: <Tech techList={item.techList} /></p>
                <p className="is-italic">{item.description}</p>
              </div>
            
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
</div>

  );
}

export default Project;
