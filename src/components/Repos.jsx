import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
  constructor() {
    super();
    this.state={};
  }


  componentDidMount() {
    var API_KEY = `ab5d3b85fd8e727a1aab75a606f8ba0f2930ce47`;
    var url = ` https://api.github.com/users/${this.props.params.username}/repos?access_token=${API_KEY}`;
    fetch(url)
    .then(response=> response.json())
    .then(data =>{

      this.setState({
        repos: data
      })
      console.log(data)
    })
  }


  _renderRepos(mappedRepo) {
    return(
          <li key={mappedRepo.id}>
            <GithubRepo repos={mappedRepo}/>
          </li>
    )
  }

  render() {
    if(!this.state.repos) {
      return <div>Loading Repos...</div>
    }

    return(
    <div className="Repos-page">
      <h3>Repos of {this.props.params.username}</h3>
      <ul>
        {this.state.repos.map(this._renderRepos.bind(this))}
      </ul>
    </div>
    )
  }
};

export default Repos;
