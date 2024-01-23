import { useState } from "react"
import jobsData from "./data.json"
import './index.css'
import Home from "./Home"
import Filters from "./Filter"

const App = () => {
const [filters, setFilters] = useState([])

// add filter item to filter array 
function handleFilters(tag){

  // check to see has tag is already cotain in array 
  if(filters.indexOf(tag) === -1){

    // add tag to filter array 
    setFilters(prevValue => [...prevValue, tag])
  }
}

// clear all filter 
function clearAll(){
  setFilters([])
} 

// clear selected item 
function clearFilter(tag){
  setFilters(filters.filter(item => item != tag))
}
  return (
<>
<div className="body">
        <div className="container">
            </div>
{/* if filter array > 0 , show filter component  */}
{filters.length > 0 && 
<Filters 
filters={filters}
clearAll={clearAll}
clearFilter={clearFilter}/>}

<div>
      {jobsData.map((jobs) => {
        
        let jobTags = [jobs.role, jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []]

        let filterJobs = (jobTags, filters) => 
          filters.every((value) => jobTags.includes(value));

       
        return filters.length === 0 ? (    
       
          <Home
            key={jobs.id}
            logo={jobs.logo}
            company={jobs.company}
            position={jobs.position}
            postedAt={jobs.postedAt}
            contract={jobs.contract}
            location={jobs.location}
            featured={jobs.featured}
            isNew={jobs.new}
            handleFilters={handleFilters}
            jobTags={jobTags}
          /> ) 

          : 

          ( filterJobs(jobTags, filters) && (

          <Home
            key={jobs.id}
            logo={jobs.logo}
            company={jobs.company}
            position={jobs.position}
            postedAt={jobs.postedAt}
            contract={jobs.contract}
            location={jobs.location}
            featured={jobs.featured}
            isNew={jobs.new}
            handleFilters={handleFilters}
            jobTags={jobTags}
          /> )

       );
     
      })}
      </div>
</div>
  </>
  )
}

export default App
