import Todo from "./interfaces/todoList";

const DEFAULT_TODO_LIST: Todo[] = [
    { id: 1, title: 'task 1', description: 'description 1', checked: false },
    { id: 2, title: 'task 2', description: 'description 2', checked: false },
    {
      id: 3,
      title: 'task 3',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium nemo omnis nobis ratione, atque veniam voluptatem vel dignissimos? Tempore, minima maxime. Laudantium tempora dolor esse voluptatem animi vitae magni.',
      checked: true
    }
  ];

export default DEFAULT_TODO_LIST;