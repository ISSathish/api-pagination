import React, { useEffect, useState } from "react";
import axios from 'axios'


function Axios(){

    const[photos,setPhotos]=useState([])
    const[name,setName]=useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos/2")
        .then((res)=>{
        setPhotos(res.data)
        console.log(photos)
        console.log(res.data)
    })
    },[])

    const PostData=()=>{
        axios.post("https://jsonplaceholder.typicode.com/photos",{name:name})
        .then((res)=>{
            setPhotos([...res.data])
    })
        console.log("data post")
    }
    const UpdateData=()=>{
        axios.patch(`https://jsonplaceholder.typicode.com/photos/${2}`,{name:name})
        .then((res)=>{
            setPhotos(res.data)
            console.log(res.data)
    })
        console.log("data updated")
    }
    const DeleteData=()=>{
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${2}`,{name:name})
        .then((res)=>{
            setPhotos(res.data)
            console.log(res.data)
    })
        console.log("data deleted")
    }

    return(
        <div>
            {/* {
                photos.map((photos,i)=>(
                    <div key={i}>
                        <p>{photos.name}</p>
                        
                    </div>
                ))
            } */}

            {photos.name}

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <button onClick={PostData}>post</button>
            <button onClick={UpdateData}>update</button>
            <button onClick={DeleteData}>delete</button>
        </div>
    )
}

export default Axios