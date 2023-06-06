import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface TODO {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then(response => {
	const todo = response.data as TODO;
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, title, completed);
})

const logTodo = (id:number, title:string, completed:boolean) => {
	console.log(`Id is:${id}. Title is: ${title}. Is it completed?: ${completed}`)
}