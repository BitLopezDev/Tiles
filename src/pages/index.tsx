import * as React from 'react';
// import Head from 'next/head'
// import Image from 'next/image';
// import styles from 'styles/styles/Home.module.css'
// import InsightsIcon from '@mui/icons-material/Insights';
// import {Menu} from '../components/menu';
// import {Search} from '../components/search';
import {Case} from '../components/case';
import {Display} from '../components/display';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';



 function Screen()  {

   
    return (
      <>
  
    
  
    <Case > 
<Display Home={true} Search={false} List={true}></Display>
      {/* {
useState()

      } */}
   
    </Case>  

<button onClick={() => {}}>Click</button>
        <p></p>
      </>
    );
  
}

export default Screen;

