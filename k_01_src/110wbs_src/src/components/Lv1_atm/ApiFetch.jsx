import React, {useState, useEffect} from 'react'

const ApiFetch = () => {

    const [get, setGet] = useState([])

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/get', {method: 'GET'})
        fetch('http://localhost:8080/someGet')
        .then(res => res.json())
        .then(data => {
            setGet(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    get.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
            
        </div>
    )
}

export default ApiFetch