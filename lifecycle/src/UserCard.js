import React from 'react';

const UserCard = props => {

      return(
    //   <div key={props.users.id} className="user">
    //     <img src={props.users.avatar_url} alt={props.users.name} />
        <div>
          <h3>{props.users.name}</h3>
          {props.users.location &&
            props.users.location.map(e => <p key={e.num}>{e.name}</p>)}
        </div>);
    //   </div>);
}

export default UserCard;