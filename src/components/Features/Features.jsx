import useThemeToggle from "../../hooks/UseThemeToogle/UseThemeTooogle";


const Features = () => {
    const {theme}=useThemeToggle();
    return (
        <div className="my-7">
            <h2 className="lg:text-5xl md:text-3xl text-xl my-7 text-center font-bold text-purple-700">Our Exclusive Features</h2>
            <section className={`p-4 lg:p-8 ${theme === 'sunset' ? 'bg-slate-800' : 'bg-white'} rounded-xl`}>
    <div className="container mx-auto space-y-4">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border-2 border-purple-700 p-4">
            <img src="https://i.ibb.co/mNDLC2c/2467821.jpg" alt="Product Image" className="h-80 aspect-video rounded-xl" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
                <span className="text-xs uppercase text-gray-600">Discover</span>
                <h3 className="text-3xl font-bold">Find Your Perfect Products</h3>
                <p className="my-6 text-gray-600">Explore a wide range of alternative products curated just for you. Whether it's food, electronics, or fashion, we've got you covered.</p>
                <button type="button" className={`self-start btn ${theme === 'sunset' ? 'bg-blue-200 text-black' : 'bg-purple-700 text-white'}`}>Shop Now</button>
            </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse border-2 border-purple-700 p-4">
            <img src="https://i.ibb.co/FWdFjHr/2649654.jpg" alt="Product Image" className="h-80  aspect-video rounded-xl" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
                <span className="text-xs uppercase ">Explore</span>
                <h3 className="text-3xl font-bold">Discover New Trends</h3>
                <p className="my-6 ">Stay ahead of the curve with the latest trends and innovations in the world of alternative products. Be the first to know what's hot!</p>
                <button type="button" className={`self-start btn ${theme === 'sunset' ? 'bg-blue-200 text-black' : 'bg-purple-700 text-white'}`}>Learn More</button>
            </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border-2 border-purple-700 p-4">
            <img src="https://i.ibb.co/WBVsxgf/19199649.jpg" alt="Product Image" className="h-80  aspect-video rounded-xl" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
                <span className="text-xs uppercase ">Join</span>
                <h3 className="text-3xl font-bold">Be Part of Our Community</h3>
                <p className="my-6 ">Connect with like-minded individuals who share your passion for alternative products. Join discussions, share insights, and make new friends!</p>
                <button type="button" className={`self-start btn ${theme === 'sunset' ? 'bg-blue-200 text-black' : 'bg-purple-700 text-white'}`}>Join Now</button>
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default Features;