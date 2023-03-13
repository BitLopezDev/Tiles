import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Menu} from '../components/menu';
import {Case} from '../components/case';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

  

  <Case > 
  <Menu/>
  </Case>

  
      
    </>
  )
}
