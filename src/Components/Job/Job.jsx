import PropTypes from 'prop-types'
const Job = ({job}) => {
  const {logo, job_title, company_name, remote_or_onsite, location,job_type, salary} = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border border-gray-300 pt-7 p-10">
  <figure><img width='20%' src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className='text-2xl'>{company_name}</p>
    <div className='flex gap-7'>
        <button className='btn border border-blue-400'>{remote_or_onsite}</button>
        <button className='btn border border-blue-400'>{job_type}</button>
    </div>
    <div className='flex'>
        <p>{location}</p>
        <p>Salary: {salary}</p>
    </div>
    <div className="card-actions">
    <button className='btn border bg-blue-400 text-white font-bold'>View Details</button>
    </div>
  </div>
</div>
    );
};
Job.propTypes = {
    job: PropTypes.object
}
export default Job;