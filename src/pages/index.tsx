import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'
import InsightsIcon from '@mui/icons-material/Insights';
import {Menu} from '../components/menu';
import {Search} from '../components/search';
import {Case} from '../components/case';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const inter = Inter({ subsets: ['latin'] });

function useState() {
  const [state, setState] = React.useState({
    HomeDisplay: false,
    SearchDisplay: true,
    ListDisplay: false,
  });
  
 if(state.HomeDisplay === true){

      return <Menu />;
    }  else if(state.SearchDisplay === true){
      return < Search/>;

    }

}
 function Screen()  {

   
    return (
      <>
  
    
  
    <Case > 
      {
useState()

      }
   
    </Case>  

<button onClick={() => {}}>Click</button>
        <p></p>
      </>
    );
  
}

export default Screen;

