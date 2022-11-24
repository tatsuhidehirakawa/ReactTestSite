import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    console.log('ApiFetch.jsx: ApiFetch()')   // Debug.
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log('ApiFetch.jsx: useEffect()')   // Debug.
        // fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        // fetch('http://localhost:8080/somePost', {method: 'GET'})
        // fetch('http://host.docker.internal:8080/somePost', {method: 'GET'})
        // fetch('http://host.docker.internal:8080/someGet', {method: 'GET'})   // Docker for Mac 18.03 and Windows10
        // fetch('http://docker.for.mac.host.internal:8080/someGet', {method: 'GET'})   // Docker for Mac 17.12
        fetch('http://docker.for.mac.localhost:8080/someGet', {method: 'GET'})   // Docker for Mac 17.06
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
        .catch(err => {
            console.log('ApiFetch.jsx: useEffect(): err: ', err)
        });
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.account_id}>{post.self_introduction}</li>)
                }
            </ul>
        </div>
    )
}

export default ApiFetch