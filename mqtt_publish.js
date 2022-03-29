const mqtt = require("mqtt");
let client = mqtt.connect('mqtt://<Your IP>')

client.on("connect", function(){
    setInterval(function(){
        let random = Math.random() * 50;

        if(random < 30){
            client.publish('topic', random.toString());
        }
    }), 30000;
});