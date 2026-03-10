function Skills() {

const skills = [
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"MongoDB",
"Tailwind",
"Git"
];

return (

<div className="max-w-4xl mx-auto mt-12">

<h2 className="text-3xl font-bold text-center mb-6">
Skills
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{skills.map((skill,index)=>(
<div
key={index}
className="bg-gray-200 p-4 text-center rounded-lg shadow">

{skill}

</div>
))}

</div>

</div>

);

}

export default Skills;