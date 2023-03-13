import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Tile} from './tile';
const inter = Inter({ subsets: ['latin'] });
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type LayoutProps = {
  children?: React.ReactNode
}

function Case({children} : LayoutProps) {
  return (
    <>
    <center>
    <div style={{border: "5px solid black", height:470, margin:2, width:320, marginBottom:0}} className={styles.case}>
      <div style={{ width:310, height:30, background: 'black'}}>
        <center>
        <p style={{color: 'white'}}>Nokia</p>
        </center>
      </div>
      <div >
         {children}
      </div>
     
      
    </div>
    <footer className={styles.downbar} style={{border: "5px solid black", borderTop: 0, width:320, height:30, background: 'black', top:0 }}>
        <center>
        <p style={{color: 'white'}}>Nokia</p>
        </center>
      </footer>
</center>
   
   
   

    </>
  )
}

export {Case};