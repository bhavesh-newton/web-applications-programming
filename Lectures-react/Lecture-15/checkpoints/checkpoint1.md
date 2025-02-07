# Checkpoint 1: JSX Variables and Expressions

## Multiple Choice Questions

1. Which syntax is correct for embedding a JavaScript expression in JSX?
   a) `${expression}`
   b) `{expression}`
   c) `<%expression%>`
   d) `{{expression}}`
   Answer: b

2. What will be rendered by this code: `const name = 'John'; return <h1>Hello {name.toUpperCase()}</h1>`?
   a) Hello {name.toUpperCase()}
   b) Hello John
   c) Hello JOHN
   d) Error
   Answer: c

3. Which of these expressions is NOT valid in JSX?
   a) `{2 + 2}`
   b) `{user.name}`
   c) `{if (condition) { return 'text' }}`
   d) `{getFullName()}`
   Answer: c

4. What's the output of: `const obj = {name: 'John'}; return <div>{obj}</div>`?
   a) {name: 'John'}
   b) John
   c) Error
   d) [object Object]
   Answer: c

5. Which is a valid way to include a string with an expression in JSX?
   a) `<div>Hello {name + ' ' + lastName}</div>`
   b) `<div>Hello ${name} ${lastName}</div>`
   c) `<div>Hello {name} {lastName}</div>`
   d) Both a and c
   Answer: d

## Coding Questions

1. Create a component that displays user information:

   ```jsx
   // Requirements:
   // - Create a UserProfile component
   // - Use local state for user data
   // - Display formatted information
   // - Use appropriate JSX expressions

   // Solution:
   function UserProfile() {
     const [user] = useState({
       firstName: 'John',
       lastName: 'Doe',
       age: 25
     });

     const getFullName = () => {
       return `${user.firstName} ${user.lastName}`;
     };

     const getRetirementYears = () => {
       return 65 - user.age;
     };

     return (
       <div>
         <h2>User Profile</h2>
         <p>Full Name: {getFullName()}</p>
         <p>Age: {user.age}</p>
         <p>Years until retirement: {getRetirementYears()}</p>
       </div>
     );
   }
   ```

2. Create a price calculator component:

   ```jsx
   // Requirements:
   // - Create a PriceCalculator component
   // - Calculate total with quantity
   // - Apply discount if applicable
   // - Use JSX expressions for calculations

   // Solution:
   function PriceCalculator() {
     const [price, setPrice] = useState(10);
     const [quantity, setQuantity] = useState(1);
     
     const calculateTotal = () => {
       const subtotal = price * quantity;
       const discount = quantity > 10 ? 0.1 : 0;
       return subtotal * (1 - discount);
     };

     return (
       <div>
         <h2>Price Calculator</h2>
         <div>
           <label>
             Price:
             <input
               type="number"
               value={price}
               onChange={(e) => setPrice(Number(e.target.value))}
             />
           </label>
         </div>
         <div>
           <label>
             Quantity:
             <input
               type="number"
               value={quantity}
               onChange={(e) => setQuantity(Number(e.target.value))}
             />
           </label>
         </div>
         <p>Subtotal: ${price * quantity}</p>
         {quantity > 10 && <p>10% bulk discount applied!</p>}
         <p>Final Total: ${calculateTotal()}</p>
       </div>
     );
   }
   ```

3. Create a text formatter component:

   ```jsx
   // Requirements:
   // - Create a TextFormatter component
   // - Transform text in various ways
   // - Use multiple JSX expressions
   // - Show different text formats

   // Solution:
   function TextFormatter() {
     const [text, setText] = useState('Hello World');

     const getFormattedText = () => {
       return {
         uppercase: text.toUpperCase(),
         lowercase: text.toLowerCase(),
         titlecase: text
           .split(' ')
           .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
           .join(' '),
         characters: text.length,
         words: text.trim().split(/\s+/).length
       };
     };

     return (
       <div>
         <h2>Text Formatter</h2>
         <input
           type="text"
           value={text}
           onChange={(e) => setText(e.target.value)}
           placeholder="Enter text to format"
         />
         <div>
           <p>Original: {text}</p>
           <p>Uppercase: {getFormattedText().uppercase}</p>
           <p>Lowercase: {getFormattedText().lowercase}</p>
           <p>Title Case: {getFormattedText().titlecase}</p>
           <p>Character Count: {getFormattedText().characters}</p>
           <p>Word Count: {getFormattedText().words}</p>
         </div>
       </div>
     );
   }
   ```

## Understanding Check

1. Explain the difference between using template literals (`${expression}`) and JSX expressions (`{expression}`).
2. What types of values can be directly rendered in JSX expressions?
3. How do you handle complex JavaScript logic that can't be directly embedded in JSX?
4. What are the best practices for formatting JSX expressions when they become complex?
5. How do you handle mathematical calculations and string manipulations in JSX?
