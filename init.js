const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
  {
    from: "rohan",
    to: "priya",
    msg: "hey did you finish the assignment yet?",
    created_at: new Date(),
  },
  {
    from: "sneha",
    to: "arjun",
    msg: "let's grab momos after class today",
    created_at: new Date(),
  },
  {
    from: "vikram",
    to: "neha",
    msg: "happy birthday!! party kab de rahi hai?",
    created_at: new Date(),
  },
  {
    from: "ananya",
    to: "kabir",
    msg: "send me the notes from yesterday's lecture pls",
    created_at: new Date(),
  },
  {
    from: "tousif",
    to: "tanya",
    msg: "all good meow, just stuck in traffic right now",
    created_at: new Date(),
  },
  {
    from: "aditya",
    to: "meera",
    msg: "are we still on for the movie tonight?",
    created_at: new Date(),
  },
  {
    from: "pooja",
    to: "rahul",
    msg: "call me once you reach home safely",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
