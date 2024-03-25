import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../utility/utility";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    useEffect(() => {
        const jobStoredId = getStoredJobApplication()
        if(jobs.length > 0) {
            const appliedJobs = jobs.filter(job => jobStoredId.includes(job.id))
            console.log(appliedJobs);
        }
        console.log(jobs, jobStoredId);
        
    }, [])
    return (
        <div>
            <h2>There are Applied jobs</h2>
        </div>
    );
};

export default AppliedJobs;