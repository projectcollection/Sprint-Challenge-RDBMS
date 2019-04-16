const db = require('./db')


const projects = 'projects'
const tasks = 'tasks'

const getProject = (id) => {
    return db(projects).where({id}).first().then(async project => {
        if(!project) return
        const tasksList = await db(tasks).where({project_id: id}).select('id', 'description', 'notes', 'complete')
        return  {
            ...project,
            tasks: tasksList
        }
    })
}

const addTask = (taskData) => {
    return db(tasks).insert(taskData)
}

const addProject = (projectData) => {
    return db(projects).insert(projectData)
}



module.exports = {
    getProject,
    addTask,
    addProject
}