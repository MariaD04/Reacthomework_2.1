import { useState } from 'react'
import { Toolbar } from './Toolbar'
import { ProjectList } from './ProjectList'
import projects from '../data/projects'

export const Portfolio = () => {

    const [filter, setFilter] = useState('All')

    let filteredProjects = projects;
    if (filter != 'All') {
        filteredProjects = projects.filter(
            (project) => project.category === filter
        )
    }

    return (
        <>
            <div className='header'>
                <div className='wrapper'>
                    <Toolbar
                        filters={["All", "Websites", "Flayers", "Business Cards"]}
                        selected={filter}
                        onSelectFilter={(filter) => setFilter(filter)}
                    />
                </div>
            </div>
            <div className='body'>
                <div className='wrapper'>
                    < ProjectList projects={filteredProjects} />
                </div>
            </div>
        </>
        
    )

}

export default Portfolio