import React from 'react';
import GithubUser from './GithubUser';

class Followers extends React.Component {
  constructor() {
    super();
    this.state={};
  }


  componentDidMount() {
    var API_KEY = `ab5d3b85fd8e727a1aab75a606f8ba0f2930ce47`;
    var url = ` https://api.github.com/users/${this.props.params.username}/followers?access_token=${API_KEY}`;
    fetch(url)
    .then(response=> response.json())
    .then(data =>{

      this.setState({
        followers: data
      })

    })
  }


  _renderFollower(mappedFollower) {
    return(
          <li key={mappedFollower.id}>
            <GithubUser user={mappedFollower}/>   {/* How to pass the mapped Followers's data to GithubUser component */}
          </li>
    )
  }

  render() {
    if(!this.state.followers) {
      return <div>Loading Followers...</div>
    }

    return(
    <div className="followers-page">
      <h3>Followrs of {this.props.params.username}</h3>
      <ul>
        {this.state.followers.map(this._renderFollower.bind(this))}
      </ul>
    </div>
    )
  }
};

export default Followers;
