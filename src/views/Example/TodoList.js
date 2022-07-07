import { useState } from "react";

function TodoList(){
    const [job,setJob] = useState('');
    const [jobs,setJobs] = useState(()=>{
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storageJobs
    });
    const handleSubmit = () =>{
        setJobs(prev => {
            const newJobs = [...prev, job];

            //luu vao localstorage
            const jobJson = JSON.stringify(newJobs);
            localStorage.setItem('jobs',jobJson);
           return newJobs
        })
        setJob('')
    }
    const handleDelete = (value)=>{
         setJobs(prev => {
            const newJobs = jobs.filter((item,index) => index !== value); 
            const jobJson = JSON.stringify(newJobs);
            localStorage.setItem('jobs',jobJson);
            return newJobs
         })
    }
return(
    <div style={{padding:32}}>
        <input value={job} 
        onChange = {e => setJob(e.target.value)}
        />
        <button onClick = {handleSubmit}>Add</button>
        <ul>
           {jobs.map((job,index)=>(
                <li key={index} onClick={() => handleDelete(index)}>{job}</li>
            ))}
        </ul>
    </div>
)
}
export default TodoList;
