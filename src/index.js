import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function GitHubUser({login}){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json()) // converting the response to json format.
        .then(setData)
        .catch(console.error);
    });
    
    if(data){
        return (
            <div> 
            <h2>{JSON.stringify(data)}</h2>
        
            <h1>{data.login}</h1>
            <img src={data.avatar_url} width={100} />
            </div>
        );
            
    }
    return null;
}

function App(){
    return <GitHubUser login= "subasnet" />
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

