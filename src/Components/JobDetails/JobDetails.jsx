import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/utility";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idt = parseInt(id)
    const job = jobs.find(job=> job.id === parseInt(idt));
    // console.log(id, job);
    const {job_description, job_responsibility, job_title, company_name, remote_or_onsite, location,job_type, salary} = job;
    const handleJobApply = () => {
        saveJobApplication(idt)
        toast('You have applied successfully');
    }
    return (
        <div>
            <h2 className="text-5xl text-center">Job Details</h2>
            <div className="grid grid-cols-4 gap-4 mb-5 mt-10">
                <div className="col-span-3 border border-gray-400 p-8 rounded">
                  <h2><span className="font-bold">Job Description:</span> {job_description}</h2>
                  <h2><span className="font-bold">Job Responsibility:</span> {job_responsibility}</h2>
                  <h2 className="text-3xl">salary: {salary}</h2>

                </div>
                <div className="bg-blue-100 border rounded p-5">
                    <h2 className="text-2xl font-medium">Job Details</h2>
                    <hr />
                    <h2 className="text-xl font-medium">Job Name: {job_title}</h2>
                    <p>Salary: {salary}</p>
                    <p>Address: {location}</p>
                    <p>Job Type: {job_type}</p>
                    <p>Company Name: {company_name}</p>
                    <p>{remote_or_onsite}</p>
                    <button onClick={handleJobApply}  className="btn btn-primary mt-2 w-full">Apply Now</button>

                </div>
            <ToastContainer/>
            </div>
        </div>
    );
};

export default JobDetails;