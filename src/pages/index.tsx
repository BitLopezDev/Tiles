import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import {Menu} from '../components/menu';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Menu/>

  
      
    </>
  )
}
