import React, {useState} from "react";
import axios from 'axios';

function Github() {
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState([]);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("")
  const client_id = 'de6897226e61624635d6';
  const client_secret = '566a825292682c225779f682d141fb32ff9b72f8';

  const userUrl = `https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`;
  const reposUrl = `https://api.github.com/users/${username}/repos?client_id=${client_id}&client_secret=${client_secret}`;
  const handleSearch = () =>{
    axios.get(userUrl)
    .then(res => {
      setData(res);
      setError("");

      // console.log(res);
    })
    .catch(err => {
      if (err.response.data.message === "Not Found"){
        setError("User not found. Search for another user.");
        setData([]);
      }

      else if(err.message === "Request failed with status code 403"){
        setError("Oops! You have exceeded your rate limit. Come back in the next 1 hour.");
        setData([]);

      }
   
    })

   
  }
  return (
  <section className="container mx-auto space-y-[3rem] flex-col flex  items-center">
    <em className="text-2xl text-center px-3 mt-[2rem]">Search by Github username and get user's data</em>
    <input type="text" 
    className="w-[60%] focus:outline-none  p-3 border border-solid border-cyan-500" 
    placeholder="Search by Username" 
    value={username} 
    onKeyUp={handleSearch}
    onChange={(event) => setUsername(event.target.value)}
    />

 {error && (

  <div className="p-3 text-center">
    <p className="text-red-600">{error}</p>
  </div>
 )}

    {data.data && (
      <section className="px-2 w-[60%]">
      
      <div className="flex flex-row space-x-4">

      <img className="w-[100px] rounded-3xl" src={data.data.avatar_url}  alt={data.data.login}/>

      <div>
       Name: <a href={data.data.html_url} className="font-[600] text-sky-500 underline">{data.data.name}</a>
        <br /> <br />
        Bio: <em> {data.data.bio}</em>
      </div>

      </div>
      <div className="border p-2 mt-[3rem] border-1 border-blue-500">
        <div className="flex flex-row space-x-5 ">
         <p>Created at:</p> 
         <p>{data.data.created_at}</p>
        </div>
        <div className="flex flex-row space-x-1">
         <p>Location:</p> 
         <p>{data.data.location}</p>
        </div>

        <div className="flex flex-row space-x-1">
         <p>Public Repo:</p> 
         <a href={data.data.repos_url} className="font-[200] text-sky-500 underline">{data.data.public_repos}</a>
        </div>
        <div className="flex flex-row space-x-1">
         <p>Followers:</p> 
         <p className="font-[200] text-sky-500">{data.data.followers}</p>
        </div>
        <div className="flex flex-row space-x-1">
         <p>Following:</p> 
         <p className="font-[200] text-sky-500">{data.data.following}</p>
        </div>
        <div className="flex flex-row space-x-1">
         <p>Twitter:</p> 
         <p className="font-[200]">{data.data.twitter_username}</p>
        </div>


      </div>

    
      </section>
    )}

   
    {/* {repo.data ? 
      <div className="">
         <h1>Last 5 Repo</h1>

        <a className="text-blue-500 underline" >{repo.data[0].name?repo.data[0].name:"Enoch"}</a>
        <br /> <br />
        <a className="text-blue-500 underline" >{repo.data[1].name?repo.data[1].name:"Enoch"}</a>
        <br /> <br />
        <a className="text-blue-500 underline" >{repo.data[2].name?repo.data[2].name:"Enoch"}</a>
        <br /> <br />
        <a className="text-blue-500 underline" >{repo.data[3].name?repo.data[3].name:"Enoch"}</a>
        <br /> <br />
        <a className="text-blue-500 underline" >{repo.data[4].name?repo.data[4].name:"Enoch"}</a>
      </div>
    : null} */}

  </section>
  );
}

export default Github;
