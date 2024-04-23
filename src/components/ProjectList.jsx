export const ProjectList = ({ projects }) => {
  let column1 = []
  let column2 = []
  let column3 = []
  let index = 0

  projects.forEach((project, index) => { 
    if (index % 3 == 0) {
      column1.push(project)
    } else if (index % 3 == 1) {
      column2.push(project)
    } else {
      column3.push(project)
    }
    
  });

  return (
    <div className='pictures'>
      <div className='column'>
        {column1.map((project) => {
          return (
            <div className='project' key={index++}>
              <img src={project.img} alt='#'/>
            </div>
          );
        })}
      </div>

      <div className='column'>
        {column2.map((project, index) => {
          return (
            <div className='project' key={index++}>
              <img src={project.img} alt='#'/>
            </div>
          );
        })}
      </div>

      <div className='column'>
        {column3.map((project, index) => {
          return (
            <div className='project' key={index++}>
              <img src={project.img} alt='#'/>
            </div>
          );
        })}
      </div>
    </div>
  );
};