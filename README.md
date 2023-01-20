## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
   ![wireframe for goblin fighter app](./assets/wireframe%20goblin.jpeg)
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
 <header id="chased-count"> You Chased 0 mice </header>
 <div class="mouse container">
 <h2>
     Your 9 Lives:<span id="cat-hp">
 </h2>
 <div>
 <cat pics>
 </div>
 </div>
 <>
    <input></input>
    <button></button>

1. **Look at the drawing and imagine using the app. What _state_ do you need to track?
   **
   let chasedCount = 0;
   let catHP = 9
   const mice = [
   {
   name: 'speedy',
   hp: 5,
   },
   {
   name: 'mousy',
   hp: 3
   },
   {
   name: 'tiny'
   hp:4
   }
   ];

1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
   Need header to display count
   Need div to seperate from mice
   Need cat image to show up as a player
   Need input to create mice names
   Need button to mice
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
