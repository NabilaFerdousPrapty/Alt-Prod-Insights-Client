import { useLoaderData } from "react-router-dom";
import Banner from "../../components/BannerSlider/Banner";
import CTA from "../../components/CTA/CTA";
import RecentQueries from "../RecentQueries/RecentQueries";
import Features from "../../components/Features/Features";


const Home = () => {
    const queries=useLoaderData();
    return (
        <div className='mx-1'>
            <Banner/>
            <RecentQueries  queries={queries}/>
            <Features/>
            <CTA/>
        </div>
    );
};

export default Home;