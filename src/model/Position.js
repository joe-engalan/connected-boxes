export default class Position {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  data = () => [this.x, this.y, this.z]
  setData = (arr) => {
    this.x = arr[0]
    this.y = arr[1]
    this.z = arr[2]
  }
}
