function hello(name) {
  let _name = name; // 변수명 앞에 underscore(_)를 포함하면 private val임을 의미
  return function () {
    // 클로저 함수
    console.log('Hello, ' + _name);
  };
}

let hello1 = hello('혜린');
hello1(); // [출력] : Hello, 백