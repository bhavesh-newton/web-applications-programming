# Checkpoint 2: Conditional Rendering

## Multiple Choice Questions

1. Which conditional rendering approach is best for simple show/hide logic?
   a) If/else statements
   b) Ternary operator
   c) Logical && operator
   d) Switch statement
   Answer: c

2. What will be rendered by: `{count && <p>Count: {count}</p>}` when count is 0?
   a) "Count: 0"
   b) Nothing
   c) "0"
   d) Error
   Answer: b

3. Which is the correct way to use a ternary operator in JSX?
   a) `{if (isLoggedIn) ? <UserGreeting /> : <GuestGreeting />}`
   b) `{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}`
   c) `{isLoggedIn && ? <UserGreeting /> : <GuestGreeting />}`
   d) `{isLoggedIn then <UserGreeting /> else <GuestGreeting />}`
   Answer: b

4. When using if statements for conditional rendering, where should they be placed?
   a) Inside JSX curly braces
   b) Outside the return statement
   c) Inside the return statement
   d) Inside a JSX tag
   Answer: b

5. What's the best practice for handling multiple conditions?
   a) Nested ternary operators
   b) Multiple && operators
   c) If/else statements outside JSX
   d) Switch statement inside JSX
   Answer: c

## Coding Questions

1. Create a component with multiple conditional states:

   ```jsx
   // Requirements:
   // - Show loading state when isLoading is true
   // - Show error message when error exists
   // - Show data when available
   // - Show "No data" message when data is empty
   // - Use appropriate conditional rendering patterns
   ```

   Solution:

   ```jsx
   function DataDisplay() {
      const isLoading = true;
      const error = null;
      const data = [];

      if (isLoading) {
         return <p>Loading...</p>;
      } else if (error) {
         return <p>Error: {error}</p>;
      } else if (data.length === 0) {
         return <p>No data</p>;
      } else {
         return <p>Data: {data}</p>;
      }
   }
   ```

2. Fix and improve this conditional rendering code:

   ```jsx
   function UserStatus({ user, isOnline }) {
      return (
         <div>
            {isOnline ? (
            user ? 
               <p>{user.name} is online</p>
               : <p>Anonymous user is online</p>
            )}
         </div>
      );
   }
   ```

   Solution:

   ```jsx
   function UserStatus({ user, isOnline }) {
      return (
         <div>
            {isOnline ? (
               user ? 
                  <p>{user.name} is online</p>
                  : <p>Anonymous user is online</p>
            ) : (
               <p>User is offline</p>
            )}
         </div>
      );
   }
   ```

3. Implement a form with conditional validation:

   ```jsx
   // Requirements:
   // - Create a ValidatedForm component
   // - Show/hide validation messages based on input
   // - Use different conditional rendering patterns
   // - Handle form submission with validation

   // Solution:
   function ValidatedForm() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [submitted, setSubmitted] = useState(false);

     const isEmailValid = email.includes('@');
     const isPasswordValid = password.length >= 6;

     const handleSubmit = (e) => {
       e.preventDefault();
       setSubmitted(true);
       
       if (isEmailValid && isPasswordValid) {
         console.log('Form submitted successfully');
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         <div>
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Enter email"
           />
           {submitted && !isEmailValid && (
             <p style={{ color: 'red' }}>Please enter a valid email</p>
           )}
         </div>
         <div>
           <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter password"
           />
           {submitted && !isPasswordValid && (
             <p style={{ color: 'red' }}>Password must be at least 6 characters</p>
           )}
         </div>
         <button type="submit">Submit</button>
         {submitted && isEmailValid && isPasswordValid && (
           <p style={{ color: 'green' }}>Form submitted successfully!</p>
         )}
       </form>
     );
   }
   ```

## Understanding Check

1. What are the pros and cons of each conditional rendering pattern in React?
2. How do you choose between using && operator and ternary operator?
3. What are the best practices for handling complex conditional logic in components?
4. How do you handle multiple conditions while keeping the code readable?
5. When should you use if/else statements vs inline conditional rendering?
