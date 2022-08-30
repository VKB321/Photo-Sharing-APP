
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./style.css";
import Insta from '../Insta/Insta';
import axios from 'axios';
import Pagination from '../Pagination';


function PostView(props) {
    const [variable, setVariable] = useState([]);
    const [pageNumber, setpageNumber] = useState([])
    const showPerPage = 1;

    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
      });

   const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
      };
    

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://vm-instaclone.herokuapp.com/'
        }).then((UserData) => {
            console.log(UserData.data)
            setVariable((UserData.data).reverse())
        }).catch((err) => {
            console.log("error Occured", err.message)
        })
    }, [])

    return (<>
        <Header />
        <div className='Insta'>
            <div className='Insta1'>
                {console.log(props.item)}
                <p classsName="container">
                {variable.slice(pagination.start, pagination.end).map((element, i) => {
        return (<Insta data={element} key={i} />)
    })}
                </p>
               
            </div>
        </div>
     <div className="pagination-center"><Pagination showPerPage={showPerPage} total={variable.length} onPaginationChange={onPaginationChange} /></div> 
    </>
    )
}


export default PostView;
