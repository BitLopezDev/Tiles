import {Component} from 'react';
 import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Tile} from './tile';
const inter = Inter({ subsets: ['latin'] });
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { render } from 'react-dom';



class Menu extends Component {
 
  //FIXME: Small tiles images are not displaying correctly
  render(){
    const gralcolstyle = {
      padding: 0,
      margin:0,
      
      maxHeight:130,
    
    
    };

    return (
      <>
     {/* maxHeight:120 */}
     <Container style={{overflowY:'auto', height:420, maxHeight:420, background:'green'}}>
  
        <Row  style={{maxWidth:250}}>
       
            <Col xs style={gralcolstyle} >
          <Tile size='small' name='John Doe' />
          <Tile size='small' name='John Doe' />
          </Col>
          
  
  
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile size='small' name='John Doe' />
          <Tile size='small' name='John Doe' />
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile size='small' name='John Doe' />
          <Tile size='small' name='John Doe' />
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile size='small' name='John Doe' />
          <Tile size='small' name='John Doe' />
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
          <Col xs style={gralcolstyle} >
          <Tile/>
          </Col>
  
        </Row>
        
        
      </Container>

      
      
  
      </>
    );
  }
  
}

export {Menu};