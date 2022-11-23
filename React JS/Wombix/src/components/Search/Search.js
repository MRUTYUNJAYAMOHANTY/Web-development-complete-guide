import React from 'react';
import './Search.css'


export default class Search extends React.Component {
    render() {
        return ( 
           <div className="search-bar">
               <div className="hrbar">
                   <div className="search-input-bar">
                       <i class="fas fa-search btn1" />
                       <input type="text" placeholder="Patient name (or)  Mobile (or) UHID" className="search-input"/>
                       <button type="button" name="submit" value="submit" className="input-button"> <i class="fa fa-search btn2" ></i></button>
                   </div>

               </div>
               
           </div>
         );
    }
}
