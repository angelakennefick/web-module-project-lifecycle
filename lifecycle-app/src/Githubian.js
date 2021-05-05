import React from 'react';

class Githubian extends React.Component {
  render() {
      const { user } = this.props;
      return(
      <div key={user.id} className="user">
        <img src={user.avatar_url} alt={user.username} />
        <div>
          <h3>{user.username}</h3>
          {user.location &&
            user.location.map(e => <p key={e.num}>{e.username}</p>)}
        </div>
      </div>);
  }
}

export default Githubian;