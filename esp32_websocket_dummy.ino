#include <WiFi.h>
#include <WebSocketsServer.h>
#include <ArduinoJson.h>

// Konfigurasi WiFi
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// WebSocket server pada port 81
WebSocketsServer webSocket = WebSocketsServer(81);

// Variabel untuk data dummy
float temperature = 25.0;
float humidity = 60.0;
int light = 500;
float pressure = 1013.25;

// Timer untuk pengiriman data
unsigned long lastSend = 0;
const long interval = 1000; // Kirim data setiap 1 detik

void setup() {
  Serial.begin(115200);
  
  // Koneksi ke WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Start WebSocket server
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
  
  Serial.println("WebSocket server started");
}

void loop() {
  webSocket.loop();
  
  unsigned long now = millis();
  if (now - lastSend >= interval) {
    lastSend = now;
    sendDummyData();
  }
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  switch(type) {
    case WStype_DISCONNECTED:
      Serial.printf("[%u] Disconnected!\n", num);
      break;
    case WStype_CONNECTED:
      {
        IPAddress ip = webSocket.remoteIP(num);
        Serial.printf("[%u] Connected from %d.%d.%d.%d\n", num, ip[0], ip[1], ip[2], ip[3]);
      }
      break;
  }
}

void sendDummyData() {
  // Update nilai dummy dengan sedikit variasi
  temperature += random(-100, 100) / 100.0;
  humidity += random(-50, 50) / 100.0;
  light += random(-10, 10);
  pressure += random(-50, 50) / 100.0;
  
  // Batasi nilai dalam range yang masuk akal
  temperature = constrain(temperature, 20.0, 30.0);
  humidity = constrain(humidity, 40.0, 80.0);
  light = constrain(light, 0, 1000);
  pressure = constrain(pressure, 1000.0, 1025.0);

  // Buat JSON object
  StaticJsonDocument<200> doc;
  
  doc["type"] = "sensor_data";
  doc["timestamp"] = millis();
  
  JsonObject data = doc.createNestedObject("data");
  data["temperature"] = temperature;
  data["humidity"] = humidity;
  data["light"] = light;
  data["pressure"] = pressure;

  // Serialize JSON ke string
  String jsonString;
  serializeJson(doc, jsonString);

  // Kirim ke semua client yang terkoneksi
  webSocket.broadcastTXT(jsonString);
} 