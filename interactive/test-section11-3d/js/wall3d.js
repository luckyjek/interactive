(function () {
    const stageElem = document.querySelector(".stage");
    const houseElem = document.querySelector(".house");
    const barElem = document.querySelector(".progress-bar");
    //mausePos이라는 객체를 만들자
    //마우스 움직이는 포인터로 값을 세팅해준다.
    //가운데가 원점이 되도록, 바꾼 값을 x, y 값으로 넣어주고, 이 mousePos객체를 각도를 계산하는데 사용할 것이다.
    const mousePos = { x: 0, y: 0 };

    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = window.document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener("scroll", function () {
        //scrollPer변수는 전체에서 얼마나 스크롤을 했는지 비율계산을 하기위해  2곳 모두 쓰려고 따로 변수처리 해놨다.
        const scrollPer = pageYOffset / maxScrollValue;
        //0~1 인 비율이다. *1000을 해서 값을 0~1000까지 세팅해준다.
        const zMove = scrollPer * 970 - 490;
        houseElem.style.transform = "translateZ(" + zMove + "vw)";

        //progress bar
        //전체스크롤 할 수있는 값 분의 현재스크롤 얼마큼 했는지 계산을해서 이용을한다.
        barElem.style.width = scrollPer * 100 + "%";
    });

    window.addEventListener("mousemove", function (e) {
        console.log(e.clientX, e.clientY);
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 + (e.clientY / window.innerWidth) * 2;
        // console.log(mousePos);
        stageElem.style.transform =
            "rotateX(" +
            mousePos.y * 5 +
            "deg) rotateY(" +
            mousePos.x * 5 +
            "deg)";
    });

    // 창에 대응하기위함
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
})();

function viewF() {
    document.querySelector(test1);
}
