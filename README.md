# Pre Setting
sudo apt install mosquitto   
sudo systemctl status mosquitto.service   
sudo apt install mosquitto-clients

npm install mqtt
<br/>
<br/>
# On CLI
mosquitto_sub -h \<Your IP> -t \<Topic Name>   
mosquitto_pub -h \<Your IP> -t \<Topic Name> -m \<Message>   