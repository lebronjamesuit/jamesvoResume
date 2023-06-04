

function Certificate({ certificateData }) {
    const { title, list } = certificateData;
   
   // List has {name, provider}
  
    return (

<div className="box "> 
  <div className="card">
      <header className="card-header has-background-white">
          <p className="card-header-title  has-text-link-dark">
          {title}
          </p>
      </header>
      <div className="card-content">
          <div className="content">
          <ul>
          {list.map(({name, provider})  => 
            <li key={name}>
               {name}
              <p>{provider}</p>
           </li>
          )}
          </ul>
          </div>
      </div>
  </div>
</div>
    );
  }
  
  export default Certificate;
  