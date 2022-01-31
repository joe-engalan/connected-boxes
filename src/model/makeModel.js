import Model from './Model'
import Position from './Position'

const makeDefaultModel = () => {
  const model = new Model()

  const p1 = new Position(-1.2, 0, 0)
  const p2 = new Position(1.2, 0, 0)

  const b1 = model.addBox(p1)
  const b2 = model.addBox(p2)

  model.addConnection(b1, b2)

  return model
}

export { makeDefaultModel }
