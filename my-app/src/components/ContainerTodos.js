import React from 'react';
import styles from '../app.module.css';

export const ContainerTodos = ({ isLoading, todos, changeChecked, changeDeleted }) => {
	return (
		<div className={styles.container_todos}>
			{isLoading ? (
				todos.map(({ id, title, completed }) => {
					return (
						<div className={styles.container_todo} key={id}>
							<div>
								<input
									className={styles.todo_checkbox}
									type="checkbox"
									defaultChecked={completed}
									onChange={(e) => changeChecked({ e, id })}
								/>
								<span
									className={
										completed
											? styles.todo_title__checked
											: styles.todo_title
									}
								>
									{title}
								</span>
							</div>
							<button onClick={() => changeDeleted(id)}>X</button>
						</div>
					);
				})
			) : (
				<div className={styles.isLoading}></div>
			)}
		</div>
	);
};
