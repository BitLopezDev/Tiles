import {Component} from 'react';
 import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Tile} from './tile';
const inter = Inter({ subsets: ['latin'] });
import Container from 'react-bootstrap/Container';
import InsightsIcon from '@mui/icons-material/Insights';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { render } from 'react-dom';
import background from '../../public/images/backgrounds/wolf.jpg';



class Search extends Component {
 
  
  render(){
    const contstyle = {
      overflow:'auto', 
      height:420, 
      maxHeight:420,
    backgroundImage:`url('${Object.entries(background)[0].slice(1)}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

    
    };
    const input = {
      width: '90%'

    }

    return (
      <>
     {/* maxHeight:120 */}
     <Container style={contstyle}>
  <br />
       <input type='text' placeholder='Buscar en la web o el teléfono' style={input} />
       <br />
      
       <Row style={{border: '2px solid green ', width:'90%'}}>
        <Col style={{border: '2px solid red',  padding:0}}>
        <InsightsIcon  style={{ 'float':'left', color:'white'}} />
        <p style={{color:'white', width:'70%'}}> <b>BitLopez</b></p>
        </Col>
        <Col></Col>
       </Row>
        
      </Container>

      
      
  
      </>
    );
  }
  
}

export {Search};