import React from 'react';
import {Link} from 'react-router'

/*- display the mapped followers of user
  - receive a user Prop from "Followers" component*/
class GithubUser extends React.Component {
  render() {
    return(
      <Link to={`/user/${this.props.user.login}`}>
        <img src={this.props.user.avatar_url} alt={this.props.user.login}/>
        {this.props.user.login}
      </Link>
    )
  }
}

export default GithubUser;
