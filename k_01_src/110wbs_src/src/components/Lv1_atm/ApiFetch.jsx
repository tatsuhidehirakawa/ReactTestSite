import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    console.log('ApiFetch.jsx: ApiFetch()')
    const [get, setGet] = useState([])

    useEffect(() => {
        console.log('ApiFetch.jsx: useEffect()')
        // fetch('https://jsonplaceholder.typicode.com/get', {method: 'GET'})
        fetch('http://localhost:8080/someGet')

        .then(res => {console.log(res);  //
            res.json()})  //
        .then(data => {
            setGet(data)
        })
        .catch(err => {
            console.log('ApiFetch.jsx: useEffect() err: ', err)
        });
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