const initialStore = {
  value: "",
  tasks: [
    { title: "Abdulloh 1" },
    { title: "Abdulloh 2" },
    { title: "Abdulloh 3" },
  ],
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };

    case "ADD_TASK":
      if (action.payload.trim() === "") return state;

      return {
        ...state,
        value: "",
        tasks: [...state.tasks, { title: action.payload }],
      };

    case "DELETE_TASK":
      const tasks = [...state.tasks];
      tasks.splice(action.payload, 1);

      return { ...state, tasks: tasks };

    default:
      return state;
  }
};

export default reducer;
