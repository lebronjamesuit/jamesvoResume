function Education ( {educationData} ){

return (<>
   

<div className="box has-background-info-light "> 
  <div className="card">
      <header className="card-header ">
          <p className="card-header-title">
           Education
          </p>
      </header>
      <div className="card-content p-3 has-background-info-light">
          <div className="content">
          <ul>
          {educationData.list.map( item =>
            <li key={item.institution}>
                <p> {item.institution}, {item.description},
                 from {item.date.start} to  {item.date.end}</p>
                
            </li>
                 )}  
          </ul>
          </div>
      </div>
  </div>
</div>


 </>);

}

export default Education;

