// import React, { Component } from "react";
// import axios from "axios";
// // import userList from '../../Assets/Data/users.json';
// import User from "./User/User.js";
// import Loading from "../Loading/Loading";

// import "./Users.css";

// export default class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userList: null,
//     };
//   }
//   base_url = "https://jsonplaceholder.typicode.com/";

//   componentDidMount() {
//     setTimeout(() => {
//       axios
//         .get(this.base_url + "users")
//         .then((response) => {
//           console.log(response);
//           this.setState({
//             userList: response.data,
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, 1000);
//   }
//   render() {
//     return (
//       <div className='Container'>
//         {this.state.userList !== null ? (
//           this.state.userList.map((user) => {
//             return (
//               <User
//                 key={user.id}
//                 id={user.id}
//                 name={user.name}
//                 username={user.username}
//                 email={user.email}
//                 phone={user.phone}
//               />
//             );
//           })
//         ) : (
//           <Loading />
//         )}
//       </div>
//     );
//   }
// }



import React , { useState , useEffect } from 'react';
import axios from "axios";
import User from "./User/User.js";
import Loading from "../Loading/Loading";






function Users() {
    const [userList, setUserList] = useState(null);


const base_url = "https://jsonplaceholder.typicode.com/";

useEffect(() => {
    setTimeout(() => {
              axios
                .get(base_url + "users")
                .then((response) => {
                  console.log(response);
                  setUserList(
                     response.data,
                  );
                })
                .catch((error) => {
                  console.log(error);
                });
            }, 1000);



  });
  return (
    <div className='Container'>
            {userList !== null ? (
              userList.map((user) => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    phone={user.phone}
                  />
                );
              })
            ) : (
              <Loading />
            )}
          </div> 



  );
}

export default Users;