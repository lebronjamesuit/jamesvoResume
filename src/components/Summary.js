function Summary ({summary}){
    
    const {title, text} = summary ;
    
    return (<>
     <section>
        <p>{text}</p>
    </section>
    
    </>);
}

export default Summary;