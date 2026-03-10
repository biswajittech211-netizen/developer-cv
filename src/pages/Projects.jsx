function Projects() {

const projects = [
{
title:"Portfolio Website",
desc:"Developer portfolio using React"
},
{
title:"Todo App",
desc:"Task manager built with JavaScript"
},
{
title:"Weather App",
desc:"Weather data using API"
}
];

return (

<div className="max-w-5xl mx-auto mt-12">

<h2 className="text-3xl font-bold text-center mb-6">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-6">

{projects.map((p,index)=>(
<div
key={index}
className="bg-white p-6 rounded-lg shadow-lg">

<h3 className="text-xl font-bold">
{p.title}
</h3>

<p className="text-gray-600 mt-2">
{p.desc}
</p>

</div>
))}

</div>

</div>

);

}

export default Projects;