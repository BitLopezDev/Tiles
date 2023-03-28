import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/styles/Home.module.css'

import {Menu} from '../components/menu';
import {Case} from '../components/case';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const inter = Inter({ subsets: ['latin'] });

function useState() {
  const [state, setState] = React.useState({
    HomeDisplay: true,
    SearchDisplay: false,
    ListDisplay: false,
  });
 if(state.HomeDisplay){
      return 'true';
    } else {
      return 'false';
    }

}
 export default class Home extends React.Component  {

  constructor(props : Object){
    super(props);
  }

  ui(...props: String[]){
    /*String["Menu" or "Search" or "Lock or ""] String.length === 1 */ 
    var giveback;
  switch(props[0]){
    case "Menu":
     giveback = <Menu />
      break;

      case "Search":
       giveback = "Lady";
        break;

      default:
giveback = <Menu />
      break;
  }
    
    

  }

  render(){
    return (
      <>
  
    
  
    <Case > 
    {/* {this.ui.call('lady') === 'true' && <Menu/>} */}
    {}
    </Case>
   {this.ui.call('Menu')}
    
        <p></p>
      </>
    );
  }
}

