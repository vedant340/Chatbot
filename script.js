

var sendBtn = document.getElementById('sendBtn');

var textbox = document.getElementById('textbox');

var chatContainer = document.getElementById('chatContainer');

var user = {message:""};

var arrayOfPossibleMessage = [

  // greetings
  { message: "hi", response: "Hello! 😊" },
  { message: "hello", response: "Hi there!" },
  { message: "hey", response: "Hey! How’s it going?" },
  { message: "good morning", response: "Good morning! Have a great day 🌞" },
  { message: "good evening", response: "Good evening! Hope your day went well 🌆" },
  { message: "good night", response: "Good night! Sweet dreams 🌙" },

  // basic conversation
  { message: "how are you", response: "I'm doing great, thanks for asking!" },
  { message: "what is your name", response: "I'm a simple chatbot created to help you." },
  { message: "who created you", response: "I was created by a developer using JavaScript." },
  { message: "are you real", response: "I'm virtual, but always here for you!" },
  { message: "can you think", response: "I can respond based on my programming." },

  // help & usage
  { message: "help", response: "Sure! Tell me what you need help with." },
  { message: "what can you do", response: "I can chat, answer questions, and entertain you." },
  { message: "how do you work", response: "I match your messages with predefined responses." },

  // fun & jokes
  { message: "tell me a joke", response: "Why don’t programmers like nature? Too many bugs 😂" },
  { message: "another joke", response: "Why did the computer get cold? It forgot to close Windows!" },
  { message: "make me laugh", response: "Why was the JavaScript developer sad? Because he didn’t know how to ‘null’ his feelings 😄" },
  { message: "do you like jokes", response: "Yes! Jokes make conversations fun." },

  // motivation
  { message: "motivate me", response: "Believe in yourself. You’re capable of amazing things!" },
  { message: "i am tired", response: "Take a short break and breathe. You’ve got this 💪" },
  { message: "i feel sad", response: "It’s okay to feel sad sometimes. Things will get better ❤️" },
  { message: "give me advice", response: "Stay consistent and keep learning every day." },

  // technology
  { message: "what is javascript", response: "JavaScript is a programming language used to make websites interactive." },
  { message: "what is html", response: "HTML is the structure of a webpage." },
  { message: "what is css", response: "CSS styles the appearance of web pages." },
  { message: "what is web development", response: "Web development is building websites and web applications." },
  { message: "what is backend", response: "Backend handles server logic, databases, and APIs." },
  { message: "what is frontend", response: "Frontend is what users see and interact with." },

  // programming
  { message: "what is nodejs", response: "Node.js allows JavaScript to run on the server." },
  { message: "what is expressjs", response: "Express.js is a framework for building Node.js apps." },
  { message: "what is api", response: "An API allows different software systems to communicate." },
  { message: "what is json", response: "JSON is a lightweight data format used to store and exchange data." },
  { message: "what is database", response: "A database stores data in an organized way." },
  { message: "what is mongodb", response: "MongoDB is a NoSQL database that stores data as documents." },

  // AI & ML
  { message: "what is ai", response: "AI means machines that mimic human intelligence." },
  { message: "what is machine learning", response: "Machine learning allows computers to learn from data." },
  { message: "what is deep learning", response: "Deep learning uses neural networks to learn complex patterns." },
  { message: "can ai think like humans", response: "AI can imitate thinking but doesn’t have emotions." },
  { message: "is ai dangerous", response: "AI is safe when used responsibly." },

  // student life
  { message: "how to study better", response: "Study regularly and practice what you learn." },
  { message: "tips for exams", response: "Revise daily and stay calm during exams." },
  { message: "what is coding", response: "Coding is writing instructions for computers." },
  { message: "why learn programming", response: "Programming builds problem-solving skills and career opportunities." },

  // daily life
  { message: "what is your favorite color", response: "I like blue—it represents technology!" },
  { message: "do you eat food", response: "Nope, I run on code ⚙️" },
  { message: "do you sleep", response: "I’m always awake for you!" },
  { message: "what time is it", response: "I don’t have a clock, but it’s always chat time!" },

  // random
  { message: "who am i", response: "You’re a curious human exploring technology!" },
  { message: "do you know me", response: "I know what you share with me." },
  { message: "tell me something interesting", response: "Did you know? JavaScript was created in just 10 days!" },
  { message: "fun fact", response: "The first computer bug was an actual insect 🐞" },

  // politeness
  { message: "thank you", response: "You’re welcome! 😊" },
  { message: "thanks", response: "Anytime!" },
  { message: "sorry", response: "No worries at all!" },

  // goodbye
  { message: "bye", response: "Goodbye! Take care 👋" },
  { message: "see you", response: "See you soon!" },
  { message: "exit", response: "Chat ended. Have a great day!" }

]


function sendMessage(userMessage){

   var messageElement = document.createElement('div');
   messageElement.style.textAlign = "right";
   messageElement.style.margin = "10px";

   messageElement.innerHTML = "<span> You: </span>" + 
   "                            <span> " + userMessage + " </span>";

   chatContainer.appendChild(messageElement);

}
function chatbotResponse(userMessage){

    var chatbotmesaage = "";

    
     if (userMessage.length > 2  || userMessage == "hi"){
       var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));
    

       if(result.length > 0){
        var response = result[0].response;
        chatbotmesaage = response;
    }else{
        chatbotmesaage = "Unable to ans it right now, please ask different question";
    
    }
}else{
        chatbotmesaage = "please send a different message";
    
}

    

    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span> Chatbot: </span>" +
    "<span>" + chatbotmesaage + "</span>";

    setTimeout(() => {
        messageElement.animate([{easing: 'ease-in',opacity:0.4},{opacity:1}],{duration:1000});
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000)
 

}


sendBtn.addEventListener('click', function(e) {
    
   var userMessage = textbox.value ;

   if(userMessage ==""){
    alert("Please enter a message")
   }else{

    let userMessageText = userMessage.trim();
    user.message = userMessageText;
    textbox.value = "";
    sendMessage(userMessageText);
    chatbotResponse(userMessageText);

   }



})