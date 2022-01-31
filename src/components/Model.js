import Box from './Box'
import Connection from './Connection'
const Model = ({ model }) => {
  return (
    <>
      {model.boxes.map((box, i) => {
        return <Box position={box.position.data()} key={i} />
      })}
      {model.connections.map((con, i) => {
        return <Connection b1={con.b1} b2={con.b2} key={i} />
      })}
    </>
  )
}
export default Model
