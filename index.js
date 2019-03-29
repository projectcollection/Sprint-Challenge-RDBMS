const express = require('express')
const helmet = require('helmet')

const db = require('./data/dbHelpers')

const app = express()

app.use(express.json(),helmet())

app.get('/projects/:id', async (req, res) => {
    const {id} = req.params
    try{
        const project = await db.getProject(id)
        res.status(200).json(project)
    }catch (e) {
        res.status(500).json('server error')
    }
})

app.post('/projects', async (req, res) => {
    const {name} = req.body
    if(!name){
        res.status(400).json('need a name fo yo project')
        return
    }
    try{
        const count = await db.addProject(req.body)
        res.status(201).json(count)
    }catch (e) {
        res.status(500).json('server error')
    }
})

app.post('/tasks', async (req, res) => {
    const {task, project_id} = req.body
    if(!task || !project_id){
        res.status(400).json('incomplete data')
    }
    try{
        const count = db.addTask(req.body)
        res.status(201).json(count)
    }catch (e) {
        console.log(e)
        res.status(500).json('server error')
    }
})

const port = process.env.PORT || 5000

app.listen(port)
