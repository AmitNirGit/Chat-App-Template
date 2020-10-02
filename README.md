
## Chat App
Hello friend, today we are going to help you create a simple Chat-App.

In the app you will have to create both client and backend using [React](https://reactjs.org/) and [Express](https://expressjs.com/) accordingly.

You have all the requirements below + A gif that will help you understand our requirements.

Don't worry, we already took care of the CSS, the dependencies, the React configuration and the express configuration so chill and enjoy.

## Before You Start:
- Run 'npm install' to install all dependencies. Do it both the client folder and the server folder.
- If you want to run the tests, you can run 'npm run test'. Again, Do it both the client folder and the server folder.
- You can run 'npm start' in the client folder to start the client app.
- You can run 'npm run dev' in the server folder to run the server with Nodemon.

        Enjoy Coding and Goodluck!!!

## Requirements Server: 
1. We will start by creating a 'messages' variable and set it to an empty array.
This array will contain objects with message data.
  
2. Create a GET "/messages" endpoint that responds all the existing messages.

3. Create a POST "/messages" endpoint that adds a new message to the exciting messages array. The message will be inside the body of the request.


## Requirements Client: 
1. We will start by creating a simple text input with the id = 'messageInput'.

2. Create a button with the id = 'sendButton' and set the type = 'submit'. This button will POST your message.

3. Wrap both the button and the input in a "form" tag.

4. Create a useEffect with an empty dependencies array.
Inside, create an interval and set it to a const variable.
That interval gets 2 parameters: \
The first one is a callback function, \
The second one is a number of milliseconds. \
The callback function will be activated in loops based on the time from the second parameter. for now, set the time to 1000ms.

5. Inside the interval callback function,
  create an http request to your GET ('/messages') endpoint,
  and then save the received data to a state variable called 'messages'. \
  You can use axios that is already installed in the projects dependencies.

6. Also inside the useEffect, create a random number between 1-2000. create a state variable named 'user' and set its value to that random number. That will be your username for now.

7. **Great work so far!** , now your messages state variable is constantly getting updated with all the messages in your server. \
Now it is time to activate your input send button. \
create a new function with the name 'postMessage' that gets a property (e).\
In this function add a POST request to your ('/messages') endpoint and send it an object with params 'body' and 'user.\
The 'body' param should come from the input value (you should use a state to save the input value and to update it onChange).\
The 'user' param should contain the user state variables value (the random number from before). \
your 'message' object should look like this:\
{ body: inputValue, user: user}
don't forget to add 'e.preventDefault()' in the beginning of the function to prevent the page from refreshing on submit. \
Now all thats left is to add to your form the attribute 'onSubmit={postMessage}' 

8. Create a new div with a class = 'messagesContainer'. inside that div, take your messages state and map through it to print all of the messages in the server. Your print should have a div containing both the message.body and the message.user. That div should have a class name of 'msg'.

9. **WOW!** you should now have a working chat app! you can open the app on two windows and see how you can send messages from one to the other. the only thing missing is proper user names and a little bit of design.\
Lets add a new input below the send button and set its value to the user state you have (the state that contains the random number). now also add an onChange() to that input to make sure you change the user state to the value of the input. now you can write in that input your name, and this will be your user name.

10. The last thing to add is a different design to messages written by you and messages written by other users.\
In your map function that prints all messages, change the className of the div being printed for each message, and set it to:\
message.user === user ? 'green msg' : 'red msg'\
We took care of the CSS for you!

**Congrats!** your chat app is done! you should be able now to pass all tests! if not, look carefully again at the requirements and make sure you did everything right.
                              
