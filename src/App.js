import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState('');
  const [posts, setPosts] = useState('');

  //user get krar jnno function banabo

  const getUsers = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(data);
      setUsers(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  //get posts function

  const getPosts = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <div className="container">
        <h1 className='text-center'>Post User App</h1>
        <button className='btn main-btn' onClick={getPosts}>load Posts</button>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 pt-2'>
              {
                posts && posts.map(post => (
                  <div className='card' key={post.id}>
                    <div className='card-header'>
                    <p>Post ID: {post.userId}</p>
                    </div>
                    
                    <div className='card-body'>
                    <p><span>Title:</span> {post.title}</p>
                    <p><span>Body:</span> {post.body}</p>
                    </div>
                   
                  </div>

                ))}
            </div>

            <div className='col-md-6 pt-2'>
              {
                users && users.map(user => (
                  <div className='card' key={user.id}>
                    <div className='card-header'>
                      <p className='user-name'>Name : {user.name}</p>
                    </div>
                    <div className='card-body'>
                      <p><span>Email:</span> {user.email}</p>
                      <p><span>address:</span> {user.address.street}</p>
                      <p><span>website:</span> {user.website}</p>
                      <p><span>company:</span> {user.company.name}</p>
                      <p><span>phone:</span> {user.phone}</p>
                    </div>

                  </div>

                ))}
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
//map er bhitor direct return krte hle () ata use kre likhte hoi r object baniye krte hle {} ata lagiye return keyword likhe krte hbe.