//https://www.eclipse.org/paho/clients/js/






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jenniffermuso26@gmail.com",
    password: "1234554321",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jenniffermuso26@gmail.com/te1");
    client.subscribe("jenniffermuso26@gmail.com/te3")
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
	message.destinationName = "jenniffermuso26@gmail.com/te2";
	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("OFF");
	message.destinationName = "jenniffermuso26@gmail.com/te2";
	client.send(message);
}


  // called when a message arrives
  function onMessageArrived(message) {
	  if (message.destinationName == "jenniffermuso26@gmail.com/te1"){
	  	document.getElementById("sensor1").innerHTML=message.payloadString;
	  }
	  if(message.destinationName == "jenniffermuso26@gmail.com/te3"){
	  	document.getElementById("sensor2").innerHTML=message.payloadString;
	  }
	  
  }
  
