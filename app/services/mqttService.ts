import mqtt from 'mqtt'

class MQTTService {
  private client: mqtt.Client | null = null
  private subscribers: Map<string, ((message: string) => void)[]> = new Map()

  connect(brokerUrl: string) {
    this.client = mqtt.connect(brokerUrl)

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker')
    })

    this.client.on('message', (topic: string, message: Buffer) => {
      const handlers = this.subscribers.get(topic) || []
      handlers.forEach(handler => handler(message.toString()))
    })
  }

  subscribe(topic: string, callback: (message: string) => void) {
    if (!this.subscribers.has(topic)) {
      this.subscribers.set(topic, [])
      this.client?.subscribe(topic)
    }
    this.subscribers.get(topic)?.push(callback)
  }

  unsubscribe(topic: string, callback: (message: string) => void) {
    const handlers = this.subscribers.get(topic) || []
    const index = handlers.indexOf(callback)
    if (index > -1) {
      handlers.splice(index, 1)
    }
    if (handlers.length === 0) {
      this.subscribers.delete(topic)
      this.client?.unsubscribe(topic)
    }
  }
}

const mqttService = new MQTTService()

export default mqttService 