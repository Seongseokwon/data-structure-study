class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  // 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear++] = element;
  }

  // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    if (this.front === this.rear) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front++];

    return result;
  }
}
