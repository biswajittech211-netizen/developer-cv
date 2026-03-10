import { useEffect, useState } from "react";

function GithubProfile() {

const [profile,setProfile] = useState({});
const [repos,setRepos] = useState([]);

const username = "biswajittech211-netizen";

useEffect(()=>{

fetch(`https://api.github.com/users/${username}`)
.then(res=>res.json())
.then(data=>setProfile(data));

fetch(`https://api.github.com/users/${username}/repos`)
.then(res=>res.json())
.then(data=>setRepos(data));

},[]);

return(

<div className="max-w-5xl mx-auto mt-10">

{/* Profile Section */}

<div className="text-center">

<img
src={profile.avatar_url}
alt="profile"
className="w-32 h-32 rounded-full mx-auto"
/>

<h1 className="text-3xl font-bold mt-4">
{profile.name}
</h1>

<p className="text-gray-600">
{profile.bio}
</p>

<p className="text-sm text-gray-500 mt-2">
Followers: {profile.followers} | Repos: {profile.public_repos}
</p>

</div>


{/* Projects */}

<h2 className="text-2xl font-bold mt-10 mb-4 text-center">
My GitHub Projects
</h2>

<div className="grid md:grid-cols-3 gap-6">

{repos.slice(0,6).map(repo=>(

<div
key={repo.id}
className="bg-white p-5 shadow-lg rounded-lg">

<h3 className="font-semibold text-lg">
{repo.name}
</h3>

<p className="text-gray-500 text-sm mt-2">
{repo.description}
</p>

<a
href={repo.html_url}
target="_blank"
className="text-blue-600 text-sm">

View on GitHub

</a>

</div>

))}

</div>

</div>

)

}

export default GithubProfile