import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Header from './Header';

import { useNavigate } from 'react-router-dom';

function App() {

  const [photos,setPhotos]=useState([])

  let[currentPage,setcurrentPage]=useState(0)
  let[postPage,setpostPage]=useState(4)
  let pages=[1,2,3,4,5,6,7,8]
  console.log(photos)
  console.log(currentPage,postPage)

  useEffect(()=>{
    fetch("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>{
      return res.json()
      
    })
    .then((data)=>setPhotos(data))
  })
  // .catch((error)=>console.log(error))

  const pagehandle=(value)=>{
    setcurrentPage(value*5)
    setpostPage((value*5)+4)
  }

  const a=useNavigate()
  const Gotofile=(value)=>{
   console.log(value);
  a(`/details/${value}`)
  }

  return (
    <div className="App">
            <Header />
            <section className='card-sec'>
              <Container>
              <Row>
              {
               photos.map((photo,i)=>{
                return (i>=currentPage && i<=postPage)?
                <Col className='p-2' >
                <Card style={{ width: '18rem' }}  className='card'>
                  <Card.Img variant="top" src={photo.image.medium} />
                  <Card.Body>
                    <Card.Title>{photo.name}</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                <Button variant="primary" onClick={()=>Gotofile(photo.id)}>Go To File</Button>
              </Card.Body>
            </Card>
                </Col>
                :""
               })
            }
                </Row>
              </Container>
              <div>
                {
                  pages.map((e,i)=>{
                    return <button className='number' onClick={()=>{pagehandle(i)}}>{e}</button>
                  })
                }
              </div>
            </section>      
    </div>
  );
}

export default App;
