import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {Menu} from '../components/menu';
import {Search} from '../components/search';
import {Case} from '../components/case';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';


function useState() {
  const [state, setState] = React.useState({
    HomeDisplay: true,
    SearchDisplay: false,
    ListDisplay: false,
  });
  
 if(state.HomeDisplay === true){

      return <Menu />;
    }  else if(state.SearchDisplay === true){
      return < Search/>;

    }

}
 function Display()  {

   
    return (
      <>
  
    
  
    < > 
      {
useState()

      }
   
    </>  


      </>
    );
  
}

export  {Display};

