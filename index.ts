import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface TODO {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then(response => {
	const todo = response.data as TODO;
	console.log(`Id is:${todo.id}. Title is: ${todo.title}. Is it completed?: ${todo.completed}`)
})
