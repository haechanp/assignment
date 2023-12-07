// (객체)생성자 함수 정의하기
function Product(name, price) {
    // this={} (백그라운드로 실행된다.)
    this.name = name;
    this.price = price;
    this.show = function() { 
        console.log(`${this.name}(${this.price}원)`);
    }
}
// 위의 생성자 함수 Product()를 이용하여 객체를 생성한다.
let pen = new Product("Ball Pen", 1000);
let nb = new Product("MacBook", 3000000);

pen.show();
nb.show();