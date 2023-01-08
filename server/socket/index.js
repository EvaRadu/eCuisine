const tasks = require("../datas/tasks");


module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection'); 
        
        socket.on('fetchTasks', () => {
            console.log('fetch tasks')
            console.log()
            for (let [key, value] of io.sockets.sockets){
                console.log("send to "+key);
                value.emit('fetchedTasks',tasks.tasks.datas.tasks);
            }

            //socket.emit('fetchedTasks',tasks.tasks.datas.tasks);

        });
		
        socket.on('udpateTasks', (data) => {
            console.log('updateTasks')
            console.log(data);
            tasks.tasks.datas.tasks = data
            //socket.emit('fetchedTasks', tasks.tasks.datas.tasks);
            console.log(tasks.tasks.datas.tasks);

            for (let [key, value] of io.sockets.sockets){
                console.log("send to "+key);
                value.emit('fetchedTasks',tasks.tasks.datas.tasks);
            }
             
        })

		socket.on('disconnect', () => console.log('disconnected')); 

	})
}