const chatBox = document.getElementById("chat-box");

function addMessage(text, className) {
    let msg = document.createElement("div");
    msg.classList.add("message", className);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! 😊";
    }
    else if (input.includes("how are you")) {
        return "I'm doing great!";
    }
    else if (input.includes("name")) {
        return "I'm your AI Chatbot 🤖";
    }
    else if (input.includes("bye")) {
        return "Goodbye! 👋";
    }
    else {
        return "I don't understand 😅";
    }
}

function sendMessage() {
    let input = document.getElementById("user-input");
    let text = input.value.trim();

    if (text === "") return;

    addMessage("You: " + text, "user");

    setTimeout(() => {
        let reply = botReply(text);
        addMessage("Bot: " + reply, "bot");
    }, 500);

    input.value = "";
}

// Enter key support
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});