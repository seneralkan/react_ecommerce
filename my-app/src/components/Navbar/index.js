import React from 'react'
import {
    Link
  } from "react-router-dom";
import styles from './styles.module.css'
import { Button, ButtonGroup } from "@chakra-ui/react"

function Navbar() {
    return (
      <nav className={styles.nav}>
          <div className={styles.left}>
                <div className="logo">
                    <Link to="/">E-commerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Product</Link>
                      
                    </li>
                </ul>
          </div>

          <div className={styles.right}>
            <Link to="/sign-in">
              <Button colorScheme="yellow">Login</Button>
            </Link>
          
            <Link to="/sign-up">
              <Button colorScheme="yellow">Register</Button>
            </Link>
          </div>
      </nav>
    )
}

export default Navbar
