import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Tile} from './tile';
const inter = Inter({ subsets: ['latin'] });
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LteMobiledataIcon from '@mui/icons-material/LteMobiledata';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery80Icon from '@mui/icons-material/Battery80';
type LayoutProps = {
  children?: React.ReactNode
}

function Case({children} : LayoutProps) {
  const battery = {
    
    /*transform: 'rotate(90deg)',  verticaAlign: 'top',*/
    color:'white',
   paddingTop:0,
   marginTop:0,
  
    margin:0,
    width:14,
    height:14,
    
  
    
  }
  return (
    <div >
    <center>
    <div style={{border: "5px solid black", height:470, margin:2, width:320, marginBottom:0, background: 'black'}} className={styles.case}>
      <div style={{ width:310, height:30, background: 'black'}}>
        <center>
        <p style={{color: 'white'}}>Nokia</p>
        </center>
      </div>



 
    




      <div>
      <Navbar  expand="lg" bg="dark" variant="dark" style={{padding:'0'}}>
  
      <Container>
 
      
 <Row style={{border: 'none ', width:'110%', height:20 }}>
  <Col style={{border: 'none',  padding:0}}>
    
  <LteMobiledataIcon style={{color:'white', float:'left', marginLeft:4, marginTop:2, height:15, width:15}} />
  <NetworkWifiIcon style={{color:'white', float:'left', marginLeft:6, marginTop:2, height:15, width:15}} />
  </Col>
  <Col></Col>
  <Col style={{padding: '0', 'marginTop':0}}>
    <Battery80Icon style={battery}  />
    
    <h6 style={{padding:'none', color:'white', fontSize:'0.8em', float:'right', margin:'0', height:16}}>22:00 &nbsp;</h6></Col>
  
 </Row>
  
</Container>
  </Navbar>
      {children}
      
         
      </div>
     
      
    </div>
    <footer className={styles.downbar} style={{border: "5px solid black", borderTop: 0, width:320, height:30, background: 'black', top:0 }}>
        <center>
    
          
          <Container style={{color: 'white', paddingBottom:30}}>
          <Row>
        <Col><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left-filled" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth={0} fill="currentColor"></path>
</svg></Col>
        <Col><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-windows" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"></path>
   <path d="M12 5l0 14"></path>
   <path d="M4 12l16 0"></path>
</svg></Col>
        <Col><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
   <path d="M21 21l-6 -6"></path>
</svg></Col>
      </Row>
          </Container>
          
          
      
        </center>
      </footer>
</center>
   
   
   <style jsx>
    
    {`
    svg {
      margin-top:-14px;
      vertical-align: center;
    }
    `}
   </style>

    </div>
  )
}

export {Case};