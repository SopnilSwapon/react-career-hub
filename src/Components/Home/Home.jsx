import Banner from "../../Banner/Banner";
import JobCategoryList from "../../Banner/JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <JobCategoryList></JobCategoryList> */}
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;