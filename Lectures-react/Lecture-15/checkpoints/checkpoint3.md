# Checkpoint 3: Loop Rendering

## Multiple Choice Questions

1. What is the correct way to render a list of items in React?
   a) Using a `for` loop inside JSX
   b) Using `Array.map()` with a `key` prop
   c) Using `Array.forEach()`
   d) Using a `while` loop
   Answer: b

2. Why is the key prop important in list rendering?
   a) It improves the styling of list items
   b) It's required by JSX syntax
   c) It helps React track and update list items efficiently
   d) It's needed for event handling
   Answer: c

3. Which is NOT a good value to use as a key prop?
   a) Database ID
   b) Array index
   c) UUID
   d) Unique string identifier
   Answer: b
   Reason: Array index is not a good key prop because it will cause performance issues when the list is reordered or filtered.

4. What happens if you don't provide a key prop when rendering lists?
   a) The list won't render
   b) React will throw an error
   c) React will show a warning in console
   d) Nothing, it's optional
   Answer: c
   Reason: If you don't provide a key prop, React will use the array index as the key. This can cause performance issues when the list is reordered or filtered.

5. Which method is most efficient for rendering large lists in React?
   a) forEach loop
   b) for...of loop
   c) `map` with key prop
   d) `reduce` method
   Answer: c

## Coding Questions

1. Create a component that renders a list of users:

   ```jsx
   // Requirements:
   // - Create a UserList component
   // - Initialize a state array with user objects
   // - Render each user with proper key handling
   // - Add a count of total users

   // Solution:
   function UserList() {
     const [users] = useState([
       { id: 1, name: 'Alice', active: true },
       { id: 2, name: 'Bob', active: false },
       { id: 3, name: 'Charlie', active: true }
     ]);

     return (
       <div>
         <h2>User List</h2>
         <ul>
           {users.map(user => (
             <li key={user.id}>
               {user.name} ({user.active ? 'Active' : 'Inactive'})
             </li>
           ))}
         </ul>
         <p>Total Users: {users.length}</p>
       </div>
     );
   }
   ```

2. Create a dynamic list with add/remove functionality:

   ```jsx
   // Requirements:
   // - Create a TodoList component
   // - Implement add and remove functionality
   // - Use proper key handling
   // - Show empty state message

   // Solution:
   function TodoList() {
     const [todos, setTodos] = useState([]);
     const [input, setInput] = useState('');

     const handleAdd = () => {
       if (input.trim()) {
         setTodos([...todos, { id: Date.now(), text: input }]);
         setInput('');
       }
     };

     const handleRemove = (id) => {
       setTodos(todos.filter(todo => todo.id !== id));
     };

     return (
       <div>
         <div>
           <input 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Add new todo"
           />
           <button onClick={handleAdd}>Add</button>
         </div>
         {todos.length === 0 ? (
           <p>No todos yet! Add some tasks.</p>
         ) : (
           <ul>
             {todos.map(todo => (
               <li key={todo.id}>
                 {todo.text}
                 <button onClick={() => handleRemove(todo.id)}>Remove</button>
               </li>
             ))}
           </ul>
         )}
       </div>
     );
   }
   ```

3. Create a filtered list component:

   ```jsx
   // Requirements:
   // - Create a SearchableList component
   // - Implement search functionality
   // - Show filtered results
   // - Display count of filtered vs total items

   // Solution:
   function SearchableList() {
     const [items] = useState([
       { id: 1, text: 'Learn React' },
       { id: 2, text: 'Build Projects' },
       { id: 3, text: 'Write Documentation' }
     ]);
     const [searchTerm, setSearchTerm] = useState('');

     const filteredItems = items.filter(item => 
       item.text.toLowerCase().includes(searchTerm.toLowerCase())
     );

     return (
       <div>
         <input
           type="text"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="Search items..."
         />
         <ul>
           {filteredItems.map(item => (
             <li key={item.id}>{item.text}</li>
           ))}
         </ul>
         <p>Showing {filteredItems.length} of {items.length} items</p>
       </div>
     );
   }
   ```

## Understanding Check

1. What are the performance implications of using array index as keys?
2. How do you handle nested lists in React?
3. What are the best practices for rendering large lists?
4. How do you handle empty list states effectively?
5. What are the common patterns for list filtering and searching?
