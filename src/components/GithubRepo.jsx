import React from 'react';

  /*use <a href> instead of <link>, since Repos is linking to an external resource*/
class GithubRepo extends React.Component {
  render() {
    return(
      <div>
        <a href={this.props.repos.html_url}>{this.props.repos.name}</a><br/><br/>

        {this.props.repos.description}<br/>
        {/* {this.props.repos.stargazers_count} */}
        <p>updated at {this.props.repos.updated_at}</p><hr/><br/>
      </div>
    )
  }
}

export default GithubRepo;
