import { useState } from 'react';
import FileBase64 from "react-file-base64";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';
import './style.css';

const Post=()=>{
  const navigate = useNavigate()
  const [item, setItem] = useState({ author: '',location:'',description:'', image: '', date: ""});
  
  
const onSubmitHandler = async (e) => {
e.preventDefault();
  
      axios({
        method: 'POST',
        url:'https://vm-instaclone.herokuapp.com/',
        data: item
       }).then(()=>{
        navigate(-1)
       }).catch((err)=>{
        console.log("Sorry Data not posted")
       },[])
  }
  return (<>
    <Header/>
    {/* <pre>{JSON.stringify(item, null, '\t')}</pre> */}
    <div className="container-post">
      <div className='post-card'>
      <form action="" onSubmit={onSubmitHandler}>
        <div className='file1'>
      <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setItem({ ...item, image: base64 })} required/>
      </div><br/>
      <div className='input'>
        <input type="text" placeholder='author' className="input-field" onChange={e => setItem({ ...item, author: e.target.value })} required/>
        <p></p>
        <input type="text" placeholder='location' className="input-field" onChange={e => setItem({ ...item, location: e.target.value })} required/>
        </div><br/>
        <div className='desc'>
        <input type="text" placeholder='description' className="input-field" onChange={e => setItem({ ...item, description: e.target.value })} required/>
        </div><br/>
        <button type='submit' className="post-btn">Post</button>

      </form>
      </div>
    </div>
    </>
  );
}

export default Post;