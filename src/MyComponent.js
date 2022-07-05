import React, {useState, useEffect} from 'react';

function MyComponentOne(){
    let [type = 'users', setType] = useState()
    let [data = [], setData] = useState()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
    }, [type])
    return (
        <div>
            <h2>Source: {type}</h2>
            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>TodoS</button>
            <button onClick={() => setType('posts')}>Posts</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>   
        </div>
    )
}

export default MyComponentOne;