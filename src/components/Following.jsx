import React from 'react';
import GithubUser from './GithubUser';

class Following extends React.Component {
  constructor() {
    super();
    this.state={};
  }


  componentDidMount() {
    var API_KEY = `ab5d3b85fd8e727a1aab75a606f8ba0f2930ce47`;
    var url = ` https://api.github.com/users/${this.props.params.username}/following?access_token=${API_KEY}`;
    fetch(url)
    .then(response=> response.json())
    .then(data =>{

      this.setState({
        followers: data
      })

    })
  }


  _renderfollowers(mappedfollower) {
    return(
          <li key={mappedfollower.id}>
            <GithubUser user={mappedfollower}/>   {/* How to pass the mapped followers's data to GithubUser component */}
          </li>
    )
  }

  render() {
    if(!this.state.followers) {
      return <div>Loading following...</div>
    }

    return(
    <div className="following-page">
      <h3>{this.props.params.username} is following</h3>
      <ul>
        {this.state.followers.map(this._renderfollowers.bind(this))}
      </ul>
    </div>
    )
  }
};

export default Following;
