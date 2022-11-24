import React from "react";
import {Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { FiPhoneIncoming } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Button from "../Button";
import logoImg from "../../assets/header2-logo.svg";
import "./Navbar.scss";



const Navbar = () => {
    
    const ToggleNav =(e) =>
    {
        e.preventDefault();
        document.getElementById("collabsed-menu").classList.toggle("opened");  
    }

    const ToggleDropMenu = (e) => {
        e.preventDefault();
        const menuItem= e.currentTarget.closest("li");
        menuItem.querySelector(".drop").classList.toggle("opened");


    } 

    return (
   
     <Col md={2} lg={10} xl={10} sm={2} xs={2}>
    
     <div 
            className="d-lg-none  text-right"
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={(e)=>ToggleNav(e)}
        >
            <FaBars  />
        </div>
        <Row id="collabsed-menu">
        <Col 
            className=" d-flex d-lg-none  justify-content-between"
          >
            <div><img src={logoImg} alt="logo" /></div>
              
            <AiOutlineClose className="closebtn" onClick={(e)=> ToggleNav (e)}/>
          </Col>
        <Col className=" d-block" md={11} lg={9} xl={9} >
        <ul className="">
            <li>
                <Link className="active">Home</Link>
                <AiOutlineDown className="ms-1 icon" onClick={(e)=>ToggleDropMenu(e)} />
                <ul className="drop">
                    <li>
                        <Link to="#"> Travel Agency 1</Link>
                    </li>
                    <li>
                        <Link to="#"> City Tour</Link>
                    </li>
                    <li>
                        <Link to="#"> Advanture</Link>
                    </li>
                    <li>
                        <Link to="#"> Wild Life</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/destination">Destination</Link>
                <AiOutlineDown className="ms-1 icon" onClick={(e)=>ToggleDropMenu(e)} />
                <ul className="drop">
                    <li>
                        <Link to="#"> Travel Agency 1</Link>
                    </li>
                    <li>
                        <Link to="#"> City Tour</Link>
                    </li>
                    <li>
                        <Link to="#"> Advanture</Link>
                    </li>
                    <li>
                        <Link to="#"> Wild Life</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/tours">Tours</Link>
                <AiOutlineDown className="ms-1 icon" onClick={(e)=>ToggleDropMenu(e)} />
                <ul className="drop">
                    <li>
                        <Link to="#"> Travel Agency 1</Link>
                    </li>
                    <li>
                        <Link to="#"> City Tour</Link>
                    </li>
                    <li>
                        <Link to="#"> Advanture</Link>
                    </li>
                    <li>
                        <Link to="#"> Wild Life</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/page">Pages</Link>
                <AiOutlineDown className="ms-1 icon" onClick={(e)=>ToggleDropMenu(e)} />
                <ul className="drop">
                    <li>
                        <Link to="#"> Travel Agency 1</Link>
                    </li>
                    <li>
                        <Link to="#"> City Tour</Link>
                    </li>
                    <li>
                        <Link to="#"> Advanture</Link>
                    </li>
                    <li>
                        <Link to="#"> Wild Life</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
                <AiOutlineDown className="ms-1 icon" onClick={(e)=>ToggleDropMenu(e)} />
                <ul className="drop">
                    <li>
                        <Link to="#"> Travel Agency 1</Link>
                    </li>
                    <li>
                        <Link to="#"> City Tour</Link>
                    </li>
                    <li>
                        <Link to="#"> Advanture</Link>
                    </li>
                    <li>
                        <Link to="#"> Wild Life</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
                <AiOutlineDown className="ms-1 icon" onClick={(e)=>ToggleDropMenu(e)}  />
                <ul className="drop">
                    <li>
                        <Link to="#"> Travel Agency 1</Link>
                    </li>
                    <li>
                        <Link to="#"> City Tour</Link>
                    </li>
                    <li>
                        <Link to="#"> Advanture</Link>
                    </li>
                    <li>
                        <Link to="#"> Wild Life</Link>
                    </li>
                </ul>
            </li>
        </ul>
        </Col>
        <Col md={11} lg={3} xl={3} className="d-block nav_phone" 
          >
            <div className="d-inline-flex">
                <FiPhoneIncoming
                    className="icon me-2 mt-1"
                    style={{ fontSize: "30px" }}
                />
                <div className="d-inline-flex flex-column">
                    <span className="text-muted">call now</span>
                    <span>+880 170 1111 000</span>
                </div>
            </div>
        </Col>
        <Col className=" d-flex d-lg-none justify-content-between">
            <Button btn_name="Book a trip" className="lg_btn"/>
          </Col>
        </Row>
    </Col>
    
    );
    };
    
    export default Navbar;