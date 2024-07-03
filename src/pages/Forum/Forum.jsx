import { useState } from 'react';
import { Route, Navigate, Link, Routes } from 'react-router-dom';
import AdminTemplate from '../Forum/components/Forum_AdminTemplate/Forum_AdminTemplate.jsx';
import CreateThreadPage from '../Forum/components/Forum_CreateThreadPage/Forum_CreateThreadPage.jsx'
import LoginPage from '../Forum/components/Forum_AdminTemplate/Forum_AdminTemplate.jsx'
import RegisterPage from '../Forum/components/Forum_CreateThreadPage/Forum_CreateThreadPage.jsx';
import ReplyForm from '../Forum/components/Forum_ReplyForm/Forum_ReplyForm.jsx';
import Forum_App from '../Forum/components/Forum_App/Forum_App.jsx';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material'

const Forum = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [apiKey, setApiKey] = useState(null);
  
    const handleLogin = (id, key) => {
      setUserId(id);
      setApiKey(key);
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setUserId(null);
      setApiKey(null);
      setIsLoggedIn(false);
    };
  
    // return (
    //     <div>
    //       <header>
    //         <h1>Forum</h1>
    //         <nav>
    //           {isLoggedIn ? (
    //             <>
    //               <button onClick={handleLogout}>Logout</button>
    //               <Link to="/create-thread" className=''>Create Thread</Link>
    //               <Link to="/admin">Admin</Link>
    //             </>
    //           ) : (
    //             <>
    //               <Link to="/login">Login</Link>
    //               <Link to="/register">Register</Link>
    //             </>
    //           )}
    //         </nav>
    //       </header>
    //       <main>
    //         <Routes>
    //           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    //           <Route path="/register" element={<RegisterPage />} />
    //           <Route
    //             path="/create-thread"
    //             element={isLoggedIn ? <CreateThreadPage userId={userId} apiKey={apiKey} /> : <Navigate to="/login" />}
    //           />
    //           <Route path="/reply/:threadId" element={isLoggedIn ? <ReplyForm /> : <Navigate to="/login" />} />
    //           <Route path="/admin" element={isLoggedIn ? <AdminTemplate /> : <Navigate to="/login" />} />
    //           <Route path="/" element={<Forum_App isLoggedIn={isLoggedIn} />} />
    //         </Routes>
    //       </main>
    //     </div>
    //   );
    // }

    return (
        <div>
          <AppBar position="static" sx={{backgroundColor: 'darkgreen'}}>
            <Toolbar sx={{backgroundColor: 'lemongreen' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome to the Forum
              </Typography>
              <nav>
                {isLoggedIn ? (
                  <>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    <Button color="inherit" component={Link} to="/create-thread">Create Thread</Button>
                    <Button color="inherit" component={Link} to="/admin">Admin</Button>
                  </>
                ) : (
                  <>
                    <Button color="inherit" component={Link} to="/login" sx={{color: "limegreen"}} >Login</Button>
                    <Button color="inherit" component={Link} to="/register" sx={{color: "limegreen"}}>Register</Button>
                  </>
                )}
              </nav>
            </Toolbar>
          </AppBar>
          <Container maxWidth="md" sx={{ paddingTop: '20px' }}> 
            <main>
              <Routes>
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/create-thread"
                  element={isLoggedIn ? <CreateThreadPage userId={userId} apiKey={apiKey} /> : <Navigate to="/login" />}
                />
                <Route path="/reply/:threadId" element={isLoggedIn ? <ReplyForm /> : <Navigate to="/login" />} />
                <Route path="/admin" element={isLoggedIn ? <AdminTemplate /> : <Navigate to="/login" />} />
                <Route path="/" element={<Forum_App isLoggedIn={isLoggedIn} />} />
              </Routes>
            </main>
          </Container>
        </div>
      );
    }
    
  
export default Forum

