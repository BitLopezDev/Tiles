import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'

interface TileProps {
  name?: string;
  size?: string;
  image?: string;
 
}
//FIXME: small tiles are separated from bottomt
//FIXME: tiles are separated row from row too much
function Tile(props: TileProps) {
  const dimensions =[];
  //[width, height]
  switch(props.size){
    case 'small':
      dimensions.push(50);
        dimensions.push(50);
       
      break;
      case 'normal':
        dimensions.push(120);
        dimensions.push(110);
       
        break;
        case 'big':
          dimensions.push(250);
        dimensions.push(120);
       
          break;
          default:
            dimensions.push(120);
        dimensions.push(120);
      
            break;
  }
  return (
    <>
    

    <div className="container mt-3" style={{maxWidth:250, padding:0, margin:0, }} >
 
  <div className="card container-fluid  " style={{width:dimensions[0] , background: 'blue',  height:dimensions[1], "border":"2px solid red", bottom:0, }} >
    <center className="navbar-brand">
      <Image className="rounded-pill" src={props.image || 'https://static.platzi.com/media/learningpath/badges/08261d05-1b55-4c23-b9b4-8427d4247835.jpg'} alt="Card image" width={props.size != 'small' ? 75 : 25} height ={props.size != 'small' ? 75 : 25} style={{marginTop: 5, padding:0 }} />
      </center>
    
    <div className="card-img-overlay d-flex align-items-end" style={{ padding:0, marginLeft:8  }} >
      <p className="card-title" style={{color: 'white'}} >{props.size != 'small' && (props.name || 'Jane Doe')} </p>
      
    </div>
  </div>
</div>

    </>
  );
}

export {Tile};