export const TodoStorage = {
    getTodos: () => {
        try {
            let todos = localStorage.getItem("todos");
            return JSON.parse(todos);
        } catch (error) {
            return [];
        }
    },
    saveTodos: (state) => {
        localStorage.setItem("todos", JSON.stringify(state));
    }
}