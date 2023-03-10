import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Tile() {
  return (
    <>
    
    
    <div className="container mt-3" >
 
  <div className="card img-fluid " style={{width:150, marginLeft:50, height:150, "border":"2px solid white"}} >
    <center><Image className="card-img-bottom text-center" src="https://static.platzi.com/media/learningpath/badges/08261d05-1b55-4c23-b9b4-8427d4247835.jpg" alt="Card image" width={100} height ={100} style={{marginTop: 10, }} /></center>
    
    <div className="card-img-overlay d-flex align-items-end" style={{ marginTop:10, marginLeft:5 }}>
      <h4 className="card-title" >John Doe</h4>
      
    </div>
  </div>
</div>

    </>
  )
}

export {Tile};