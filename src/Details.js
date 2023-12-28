import axios from "axios"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';

function Details() {
    const [photos, setphotos] = useState([]) //array usestate pass 

    useEffect(() => {
        // fetch("https://api.tvmaze.com/shows/1/episodes")
        // .then((res)=>{
        //   return res.json()
        // })
        // .then((data)=>setphotos(data))

        //AXIOES
        axios.get("https://api.tvmaze.com/shows/1/episodes")
            .then((res) =>
                setphotos(res.data)
            )

    }, [])
    const params = useParams()
    const item = photos.find((e) => e.id === parseInt(params.id))
    console.log(item);
    return (

        <div className="div">
            <div className="cards-div">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><h4>Movie Details</h4></Card.Title>
                    <Card.Text>
                        <img src={item?.image.medium} />
                        <h4>Movie Name:  {item?.name}</h4>
                        <h5> Rating:{item?.rating.average}</h5>
                        <h5>season:{item?.season}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
export default Details