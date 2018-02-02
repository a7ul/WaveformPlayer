export default class Timer {
  constructor() {
    this.setOnClickHandler = jest.fn();
    this.start = jest.fn();
    this.pause = jest.fn();
    this.stop = jest.fn();
    this.seekBy = jest.fn();
    this.setOnTickHandler = jest.fn();
  }
}
