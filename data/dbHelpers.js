const db = require('./db')


const projects = 'projects'
const tasks = 'actions'

const getProject = (id) => {
    return db(projects).where({id}).first().then(async project => {
        const tasksList = await db(tasks).where({project_id: id}).select('id', 'task', 'notes', 'complete')
        return  {
            ...project,
            tasks: tasksList
        }
    })
}

const addTask = (taskData) => {
    console.log(taskData)
    return db('actions').insert(taskData)
}

const addProject = (projectData) => {
    return db(projects).insert(projectData)
}



module.exports = {
    getProject,
    addTask,
    addProject
}