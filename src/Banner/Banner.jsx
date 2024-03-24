import banner from '../assets/../images/user.png'
const Banner = () => {
    return (
       <div>
         <div className='flex items-center justify-between my-4 mb-10'>
            <div>
            <h2 className="text-5xl text-center flex-grow">One Step Closer To Your <span className="text-blue-400 mt-3 block">Dream Job</span></h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <div className='flex justify-center mt-5'>
        <button className='btn bg-blue-400 '>Get Started</button>
        </div>
            </div>
            <img width='50%' src={banner} alt="" />
        </div>
       </div>
    );
};

export default Banner;