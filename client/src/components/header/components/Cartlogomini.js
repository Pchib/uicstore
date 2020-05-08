import styles from "../stylesheets/cartlogomini.module.sass";
import { NavDropdown } from "react-bootstrap";
import Auth from "../../../modules/Auth";
import jumpTo from "../../../modules/Navigation";
import Search from "./Search";
import styles1 from "../stylesheets/header.module.sass";

import React, { Component } from 'react'

export default class Cartlogomini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isToggle: false,
      index: 0
    };
  }
   
  
  render() {
    const {
      items
    } = this.props;
    console.log(Object.values(items).length)     
    let itemall = Object.values(items).length
    return (
      <div>
      <div className={styles.outbox}>
      <div className={styles.tag} onClick={() => jumpTo("/bag")}>
      <i className="fa fa-cart-plus"><span>{"       "}{itemall}</span></i>
      
      </div>
    
    </div>
      </div>
    )
  }
}
