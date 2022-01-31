import ConnectionModel from './ConnectionModel'
import BoxModel from './BoxModel'

export default class Model {
  constructor() {
    this.boxes = []
    this.connections = []
  }

  addBox = (pos) => {
    const box = new BoxModel(pos)
    this.boxes.push(box)
    return box
  }

  addConnection = (b1, b2) => {
    const connection = new ConnectionModel(b1, b2)
    this.connections.push(connection)
    return connection
  }
}
