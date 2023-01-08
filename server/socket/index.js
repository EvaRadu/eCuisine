const tasks = require("../datas/tasks");


module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection'); 
        
        socket.on('fetchTasks', () => {
            console.log('fetch tasks')
            socket.emit('fetchedTasks',tasks.tasks.datas.tasks);

        });
		
        socket.on('udpateTasks', (data) => {
            console.log('updateTasks')
            tasks.tasks.datas.tasks = data
            socket.emit('fetchedTasks', tasks.tasks.datas.tasks);
        })

		socket.on('disconnect', () => console.log('disconnected')); 

	})
}