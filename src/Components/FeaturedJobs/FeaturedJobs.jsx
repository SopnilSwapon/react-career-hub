import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center">Featured Jobs</h2>
            <p className="text-center my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid grid-cols-2 gap-10 mt-10">
           {
                jobs.slice(0, dataLength).map(job=><Job key={job.id} job={job}></Job>)
            }
           </div>
           <div className={`flex justify-end ${dataLength === 4 ? '' : 'hidden'}`}>
            <button onClick={() =>setDataLength(jobs.length)} className="bg-blue-300 btn text-2xl rounded text-white my-5">Show All</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;