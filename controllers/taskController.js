const Task = require('./../models/task');

exports.getTasks = async(req, res) => {
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
exports.getTask = async (req , res)=>{
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

exports.createTask = async (req, res) => {
    try{
        const newTask = await Task.create(req.body);
        res.status(200).json(newTask);
    }catch (error){
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id , req.body, {
            new : true,
            runValidators: true
        });
        res.status(200).json(task);
    }catch (error){
        res.status(500).json({
            error: error.message
        })
    }

}

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(204).json();
    }catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
