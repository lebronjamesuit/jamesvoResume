function StudyList() {
    const players = ["React JS", "Java", "MondoDB"];
  
    return (
      <div>
          <ul>
                {players.map((playerName) => (
                <DisplayList key={playerName} name={playerName} />
                ))}
        </ul>
      </div>
    );
  }

  function DisplayList({name }) {
    console.log({name});

    return <li>I am a {name}</li>;
  }
  


export default StudyList;
