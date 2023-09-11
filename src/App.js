// import React, { useEffect, useState } from 'react'
// import Loading from './loading';
// import User from './User';


// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getUsers = async () => {
//       try {
//           const response = await fetch('https://api.github.com/users');
//            setLoading(false);
//           setUsers(await response.json());
//       } catch (error) {
//           setLoading(false);
//           console.log("my error is "+ error);
//       }
//   }

//   useEffect(() => {
//       getUsers();
//   }, []);

//   if (loading) {
//       return <Loading />
//   }
//   return (
//     <>
// <User users={users}/>



//     </>
//   )
// }

// export default App



import React from 'react'
import Number from './Number'
import GmailSiginin from './GmailSiginin'
import GoogleSignin from './GoogleSignin'

const App = () => {
  return (
    <div>
     {/* <GmailSiginin /> */}
        <GoogleSignin />
    </div>
  )
}
// Email  
export default App