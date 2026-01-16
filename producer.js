import { Queue } from "bullmq";

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = notificationQueue.add("Email to Prahas", {
    email: "prahas@gmail.com",
    subject: "Welcome message",
    body : "Hey Piyush , Welcome"
  });

  console.log("Job added to queue " , (await res).id);
  
}

init()
