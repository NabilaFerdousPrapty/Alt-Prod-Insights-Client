import React from 'react';
import QueryCard from './QueryCard';

const RecentQueries = ({queries}) => {
    // console.log(queries);
    
    const sortedQueries = queries.sort((a, b) => new Date(b.currentDate + ' ' + b.currentTime) - new Date(a.currentDate + ' ' + a.currentTime));
    const recentlyAddedQueries = sortedQueries.slice(0, 6);
    return (
       <>
         <div className='mt-10 mb-5'>
              <h1 className='text-5xl text-center font-semibold'>Recently Added Queries</h1>
              <p className='text-center font-serif font-medium my-4 text-blue-400'> 
                Here are the most recent queries added by our users. 
                Feel free to check them out and provide your valuable recommendations.
              </p>
         </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
           recentlyAddedQueries.map((query) => <QueryCard key={query._id} query={query} />)
          }
        </div>
       </>
    );
};

export default RecentQueries;