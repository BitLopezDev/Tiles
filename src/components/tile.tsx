import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Tile() {
  return (
    <>
    
    
    <div className="container mt-3" style={{maxWidth:250, padding:0, margin:0}} >
 
  <div className="card container-fluid  " style={{width:120,  height:120, "border":"2px solid black"}} >
    <center className="navbar-brand"><Image className=" rounded-pill" src="https://static.platzi.com/media/learningpath/badges/08261d05-1b55-4c23-b9b4-8427d4247835.jpg" alt="Card image" width={75} height ={75} style={{marginTop: 5, padding:0 }} /></center>
    
    <div className="card-img-overlay d-flex align-items-end" style={{marginTop:10, padding:0, marginLeft:8  }}>
      <p className="card-title" >John Doe</p>
      
    </div>
  </div>
</div>

    </>
  )
}

export {Tile};