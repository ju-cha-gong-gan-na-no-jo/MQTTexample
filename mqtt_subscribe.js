const mqtt = require("mqtt");
let client = mqtt.connect('mqtt://<Your IP>');

client.on('connect', function(){
  client.subscribe("topic");
  console.log("Client has subscribed successfully");
});

client.on('message', function(topic, message){
  console.log(message.toString());
})