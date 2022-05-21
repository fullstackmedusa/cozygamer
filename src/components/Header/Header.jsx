import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./Header.css";
export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
      <div className="whole-header" >
       
          <Header as="h3" floated="left">
             <Link to={`/${user.username}`}>
              <Image
              src={
                user?.photoUrl
                  ? user?.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
            ></Image>
            </Link>
          </Header>
         <Header as="h3" floated="left">
            <div id="greeting">
             Hello {user.username}
            </div>
          </Header>
          <Header as="h3" floated="right">
            <Link to="/">
              <Icon name="home"></Icon>
            </Link>
            <Link to="" onClick={handleLogout}>
              Logout
            </Link>
          </Header>
       
      </div>
    );
  }







// import React from 'react';
// import { Header, Segment } from 'semantic-ui-react';

// export default function PageHeader({user, handleLogout}){
//     return (
//         <Segment>
//             <Header as='h2' >
//                 this is the HEADER
//             </Header>
//         </Segment>
//     )
// }