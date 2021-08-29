import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import {PATH} from './Routes';

function Header() {
    return (
        <div className={classes.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={classes.link} activeClassName={classes.active}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={classes.link} activeClassName={classes.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={classes.link} activeClassName={classes.active}>junior+</NavLink>
            <div className={classes.block}/>
        </div>
    );
}

export default Header
