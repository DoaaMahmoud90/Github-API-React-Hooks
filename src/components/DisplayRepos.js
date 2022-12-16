
export default function DisplayRepos(props){
  const {repos} = props;
  return(
    <div className="repositories-box">
      <h3>User Repositories</h3>
      <ul>
        {repos && repos.map( repo => (
          <li key={repo.id}><span className="repo-title">{repo.name}: </span><span className="repo-url"><a href="{repo.url}">{repo.url}</a></span> </li>
        ))}
      </ul>
    </div>
  );
}