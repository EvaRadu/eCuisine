const tasks = require("../datas/tasks");


module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection'); 
        
        socket.on('fetchTasks', () => {
            console.log('fetch tasks')
            socket.emit('fetchTasks',tasks.tasks.datas.tasks);
            console.log(tasks.tasks.datas);

        });
		
        socket.on('udpateTasks', (data) => {
            console.log("recieve data")
            console.log(data);
            tasks.tasks.datas.tasks = data
            console.log("server data")
            console.log(tasks.tasks.datas)
            socket.emit('fetchTask', tasks.tasks.datas.tasks);
        })

		socket.on('disconnect', () => console.log('disconnected')); 

	})
}