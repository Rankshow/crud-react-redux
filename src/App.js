import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Navbar from './redux/Navbar';
import { useState } from 'react';
import { commentPost, deletePost, updateUser } from './redux/post';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const App = () => {
  // hooks and state
  const itemPost = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newUser, setNewUser] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className='text-center'>
        <Navbar />
        <h1>Application Crud</h1>
         <input type='text' placeholder='Enter Name' 
         onChange={(e) => setName(e.target.value)} />
         <input type='text' placeholder='Enter password' onChange={(e) => setUserName(e.target.value)}/>
         <button onClick={() => {dispatch(commentPost({id: "", name, username}))}}>Post user</button>
          <div>
            {
            itemPost.map((user) => {
              return (
                <div className='d-flex justify-content-center'>
               <Card className='mt-5 p-2' style={{ width: '400px', height: "30vh"}} >
                <Card.Title>{user.name} 🍠  </Card.Title>
                <Card.Text>{user.username} 🙉  </Card.Text>

                <input type='text' placeholder='Update your username' onChange={(e) => setNewUser(e.target.value)}/>

        
                <Button onClick={() => {dispatch(deletePost({id: user.id}))}} size="md w-50 mx-auto mt-2" variant='danger'>delete user</Button>

                <Button onClick={() => {dispatch(updateUser({id: user.id, username: newUser}))}} size="md w-50 mx-auto mt-2" variant='success'>update username</Button>
                
               </Card>
               </div>
              )
            })
            }
          </div>
      </div>
    </>
  )
}

export default App;
