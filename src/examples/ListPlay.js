

function ListPlay (){

     // Pretend that you call ListPlay with this array
     const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ];

    const childLI =   posts.map( (post) => 
        <ListChild key={post.id} post={post} />
     );

     const parent = (
        <ul>
            {childLI}
        </ul>

     );

    return (<div>
            {parent}
    </div>);

}


function ListChild (post){

    return ( 
        <>
        <li>
            {post.title}
        </li>
        </>
    );

}

export default ListPlay;
