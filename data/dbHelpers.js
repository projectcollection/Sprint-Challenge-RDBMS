const db = require('./db')


const projects = 'projects'
const tasks = 'tasks'

const getProject = (id) => {
    return db(projects).join(tasks, 'tasks.project_id', '=', 'projects.id')
        // .where({'projects.id': id})
        // .then(res => {
        //     res.reduce((returnObj, item) => {
        //
        //     }, {})
        // })
}

const addTask = (taskData) => {
    console.log(taskData)
    return db('tasks').insert(taskData)
}

const addProject = (projectData) => {
    return db(projects).insert(projectData)
}



module.exports = {
    getProject,
    addTask,
    addProject
}