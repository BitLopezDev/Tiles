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
  return (
    <>
   <center>
   <Container style={{overflowY:'auto', height:420, maxHeight:420}}>
      <Row  style={{width:250}}>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
       
        <Col xs style={{padding:0, margin:0}}>
        <Tile/>
        </Col>
      </Row>
      <Row  style={{width:250}}>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
       
        <Col xs style={{padding:0, margin:0}}>
        <Tile/>
        </Col>
      </Row>
      <Row  style={{width:250}}>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
       
        <Col xs style={{padding:0, margin:0}}>
        <Tile/>
        </Col>
      </Row>

      <Row  style={{width:250}}>
        <Col xs style={{padding:0, margin:0}} >
        <Tile/>
        </Col>
       
        <Col xs style={{padding:0, margin:0}}>
        <Tile/>
        </Col>
      </Row>
      
    </Container>
    </center>

    </>
  )
}

export {Menu};