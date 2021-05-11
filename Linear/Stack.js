class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    // stack의 크기를 알려주는 함수
    // stack의 사이즈는 top과 동일하다
    return this.top;
  }

  push(element) {
    // stack에 자료를 입력하는 함수
    this.storage[this.top++] = element;
  }

  pop() {
    // stack에 자료를 추출하는 함수
    if (!this.top) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[--this.top];
    return result;
  }
}
