import './insta.css';
import heart from "../images/heart_fev.png";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Insta(props) {
    return (
        <div className='content1'>
        <div className='content'>
            <div id='grid1name'>
                <p className='NameGrid'>
                    <b>{props.data.author}</b>
                    <p id='colour'>{props.data.location}</p>
                </p>
                <b id='dotFont'>...</b>
            </div>
            <img id='post' src={props.data.image} alt='Loading_image' />
            <div id='grid1name'>
                <p>
                   <img className='imglike' id="props.data._id" src={heart} alt='loading heart_image'/>
                    <span><i className="material-icons iconSend">send</i></span>
                    </p>
                <p id='dotFont1'>{props.data.date}</p>
            </div>
            
            
            <p id='colour1'>{45} likes</p>
            <b id='description'>{props.data.description}</b>
        </div>
        </div>
    );
}

export default Insta;
