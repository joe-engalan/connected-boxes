export default class BoxModel {
  constructor(pos) {
    this.position = pos
  }

  position = () => this.position
  setPosition = (arr) => this.position.setData(arr)
}
