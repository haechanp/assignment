//============================================================================
// 학식 메뉴를 객체로 설계하기
//============================================================================
class Menu {
    constructor (name, price, count=0) {
        this.name = name;   //메뉴명
        this.price = price; //가격
        this.count = count; //재고량
        console.log(`새 메뉴 [${this.name}]:(${this.price}원)  (재고량:${this.count}개)가 생성되었습니다.`);
    }
    //메뉴 현황 보여주기
    show() {
        console.log(`[${this.name}]:(${this.price}원)  (재고량:${this.count}개)`);
    }
    //메뉴 재고량 추가하기
    supply(count) {
        this.count += count;
        console.log(`[${this.name}] 재고량이 ${count}개 추가되어 현재 ${this.count}개입니다.`);
    }

    //메뉴 주문하기
    order(count=1) {
        if(count <= this.count) {
            console.log(`[${this.name}] ${count}개를 판매하였습니다.`);
            //판매한(주문한) 개수를 재고량에 반영한다.
            this.count = this.count - count;
        } else {
            console.log(`현재 [${this.name}] 메뉴는 ${this.count}개까지만 주문가능합니다.`);
        }
    }
}
//============================================================================
// 키오스크를 객체로 설계하기
// 메뉴들을 관리하면서 주문 처리를 담당한다.
//============================================================================
class Kiosk {
    constructor(title) {
        this.title = title;
        this.menu = []; // 키오스크 생성 초기에는 메뉴가 없다.
        console.log(`[${this.title}] 학식 판매 키오스크를 오픈하였습니다.`);
    }
    //메뉴 추가 메소드
    addMenu(menu) {
        this.menu.push(menu);
        console.log(`[${this.title}]에 [${menu.name}] 메뉴가 추가되었습니다.`);
    }
    //메뉴판 보여주기
    //속성 menu 배열에 저장된 메뉴 목록을 보여준다.
    showMenu() {
        console.log(`==============[${this.title} 메뉴]=====================`)
        for(let menu of this.menu)
            menu.show();
        console.log("=======================================================================");
    }
    //메뉴 배열에서 같은 메뉴명의 객체 찾기
    checkMenu(menuname) {
        for(let menuitem of this.menu)
            if(menuname === menuitem.name)
                return menuitem;
        return null;
    }
    //주문 처리
    order(menuname, count=1) {
        //1. menuname과 일치하는 메뉴를 속성 menu 배열에서 찾는다.
        let menu = this.checkMenu(menuname);
        //2-1. 일치하는 메뉴를 찾으면 해당 메뉴의 메소드 order를 호출하여 처리한다.
        //2-2. 일치하는 메뉴가 없으면 적절한 오류(또는 안내) 메시지를 출력한다.
        if(menu)
            menu.order(count);
        else
            console.log(`[주문실패!] [${menuname}] 메뉴명이 잘못되었거나 없는 메뉴입니다.`);
    }
}
//============================================================================
// 메뉴 생성하기
let menu1 = new Menu("돈까스", 4500, 5);
let menu2 = new Menu("김치찌개", 5500, 10);
let menu3 = new Menu("라면", 2500, 50);

// 판매 키오스크 생성하기
let DIT = new Kiosk("동의과학대학교 학생식당");

// 키오스크에 판매할 메뉴 등록하기
DIT.addMenu(menu1);
DIT.addMenu(menu2);
DIT.addMenu(menu3);

// 키오스크 메뉴판 보여주기
DIT.showMenu();
DIT.order("라면밥", 4); // 오류 주문 예.
DIT.order("라면", 4); // 정상 주문 예.