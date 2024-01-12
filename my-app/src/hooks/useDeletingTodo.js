export const useDeletingTodo = ({ setRefresh, refresh }) => {
	const changeDeleted = (id) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
		})
			.then((response) => console.log(response))
			.finally(() => setRefresh(!refresh));
	};

	return changeDeleted;
};
