// Product class 정의하기 (생성자 함수 대신에 사용)
class Product {
    constructor(name, price) { // 생성자 함수 역할. (함수명은 construct로 고정됨)
        this.name = name;
        this.price = price;
    }
    show() {
        console.log(`${this.name}(${this.price}원)`);
    }
}

// 위의 class Product를 이용하여 객체를 생성한다.
let pen = new Product("Ball Pen", 1000);
let nb = new Product("MacBook", 3000000);

pen.show();
nb.show();