import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Tile} from './tile';
const inter = Inter({ subsets: ['latin'] });
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu() {
 
  //FIXME: Small tiles images are not displaying correctly
  
  return (
    <>
   
   <Container style={{overflowY:'auto', height:420, maxHeight:420}}>

      <Row  style={{maxWidth:250}}>
     
          <Col xs style={{padding:0, margin:0}} >
        <Tile size='small' name='John Doe' />
        <Tile size='small' name='John Doe' />
        </Col>
        


        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile size='small' name='John Doe' />
        <Tile size='small' name='John Doe' />
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile size='small' name='John Doe' />
        <Tile size='small' name='John Doe' />
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile size='small' name='John Doe' />
        <Tile size='small' name='John Doe' />
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>

      </Row>
      
      
    </Container>
    

    </>
  )
}

export {Menu};