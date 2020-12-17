import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
  //background-color: #287ed9;
  background-image: url("https://acupunctureofiowa.com/wp-content/uploads/2019/11/Acupuncture-of-Iowa-Iowa-City-Blogs-header-food.jpg");
  background-repeat: no-repeat;
  width: auto;
  height: 200px;
 
  
`

const ButtonGroup = styled.ul`
width: auto;
background-color : #9fd281;
border-radius: 20px;
opacity: 0.9;
margin-block-end: 0;
`


function Navbar(props) {


    return (
        <>
        <NavStyle>

                <ButtonGroup className="nav justify-content-center" >
                    <li className="nav-item">
                        <a className="nav-link" id="meals" href="/" style={{"color": "white", 'font-family': "'Berkshire Swash', cursive",  "font-size": "30px"}}
                           onMouseOver={() => {
                            document.querySelector(`#meals`).style.backgroundColor = "#88a624";
                            document.querySelector(`#meals`).style.border = "none";
                            document.querySelector(`#meals`).style.borderRadius = "10px";
                        }} onMouseOut={() => {
                            document.querySelector(`#meals`).style.backgroundColor = "initial";
                        }}>Meals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="random" href="/random" style={{"color": "white", 'font-family': "'Berkshire Swash', cursive",  "font-size": "30px"}}
                           onMouseOver={() => {
                               document.querySelector(`#random`).style.backgroundColor = "#88a624"
                               document.querySelector(`#random`).style.border = "none";
                               document.querySelector(`#random`).style.borderRadius = "10px";
                           }}
                           onMouseOut={() =>
                               document.querySelector(`#random`).style.backgroundColor = "initial"}>Random Meal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="wine" href="/wine" style={{"color": "white", 'font-family': "'Berkshire Swash', cursive",  "font-size": "30px"}}
                           onMouseOver={() => {
                               document.querySelector(`#wine`).style.backgroundColor = "#88a624"
                               document.querySelector(`#wine`).style.border = "none";
                               document.querySelector(`#wine`).style.borderRadius = "10px";
                           }} onMouseOut={() =>
                            document.querySelector(`#wine`).style.backgroundColor = "initial"}>Wine</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="videos" href="/videos" style={{"color": "white", 'font-family': "'Berkshire Swash', cursive",  "font-size": "30px"}}
                           onMouseOver={() => {
                               document.querySelector(`#videos`).style.backgroundColor = "#88a624"
                               document.querySelector(`#videos`).style.border = "none";
                               document.querySelector(`#videos`).style.borderRadius = "10px";
                           }} onMouseOut={() =>
                            document.querySelector(`#videos`).style.backgroundColor = "initial"}>Videos</a>
                    </li>
                </ButtonGroup>
        </NavStyle>
            </>
    );
}

export default Navbar;