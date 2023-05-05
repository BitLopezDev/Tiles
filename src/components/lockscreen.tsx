import {Component} from 'react';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from '../../public/images/backgrounds/boat.jpg';

class LockScreen extends Component {

    render(){
        const contstyle = {
          overflow:'auto', 
          height:420, 
          maxHeight:420,
        backgroundImage:`url('${Object.entries(background)[0].slice(1)}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    
        
        };
        const input = {
          width: '90%'
    
        }
    
        return (
          <>
         {/* maxHeight:120 */}
         <Container style={contstyle}>
          
      
            
          </Container>
    
          
          
      
          </>
        );
      }
}

export {LockScreen};