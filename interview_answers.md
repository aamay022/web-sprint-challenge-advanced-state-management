# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

It shares data that may be requiered by many components. Rather than having to worry about passing props through each component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are merely middle men that verify that a type of action is being called, and can even recieve certain data (payload). Reducers verify that if an action is being called the state will then be updated. And stores are way of passing data through components from our reducer, in order to apply that data into a component, call it, or manipulate it with user events.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Thunk simply allows us to consume data from API's inside of our action file.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

The one that really grabs my attention is context, it is so easy to use and it makes my code look a lot cleaner, although it can make components harder to use. Its great to know all possible tools to use, but whichever is most effecient and allows me to get more work done, is the one I want to use. I feel using state from reducers, will come in handy once our applications become more complex. 