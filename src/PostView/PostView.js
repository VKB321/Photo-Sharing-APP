
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./style.css";
import Insta from '../Insta/Insta';
import axios from 'axios';

function PostView(props) {
    const [variable, setVariable] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url:'https://vm-instaclone.herokuapp.com/'
        }).then((UserData)=>{
            console.log(UserData.data)
            setVariable((UserData.data).reverse())
        }).catch((err)=>{
            console.log("error Occured", err.message)
        })
    },[])

    return (<>
     <Header/>
        <div className='Insta'>
            <div className='Insta1'>
               {console.log(props.item)}
                <p classsName="container">
                    {variable.map((element, i) => {
                        return (<Insta data={element} key={i} />)
                    })}
                </p>
            </div>
        </div>
        </>
    )
}


export default PostView;
