(function () {
    const houseElem = document.querySelector(".house");
    const barElem = document.querySelector(".progress-bar");
    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
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

    // 창에 대응하기위함
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
})();
