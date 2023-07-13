import { Component } from "react";
import {Map,GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {

 render(){
  
    return(
      <Map
         google = {this.props.google}
         style = {{width:"100%",height:"100%"}}
         zoom = {12}
         initialCenter= {
          {
            lat:10.0261,
            lng:76.3125
          }
         }
      
      
      
      />



    )

  
 }

}

export default GoogleApiWrapper({
 apikey:"AIzaSyDRJvu5W7wye_HEgvtEaGDEVzlaQU0SWhg"  

})(MapContainer)


