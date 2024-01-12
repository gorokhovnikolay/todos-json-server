export const useCheckedTodo = ({ setRefresh, refresh }) => {
	const changeChecked = ({ e, id }) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ completed: e.target.checked }),
		})
			.then((response) => console.log(response))
			.finally(() => setRefresh(!refresh));
	};

	return changeChecked;
};
