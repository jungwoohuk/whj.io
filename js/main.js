/* 메뉴창 스타일 */
// $('.menu-bt').click(function(){
//     $('.gnb').toggleClass('gnbopen');
//     $('.menu-cbt').toggleClass('show');
// });

//버튼눌렀을때 메뉴 보이고 닫기 버튼도 보이기
document.querySelector('.menu-bt').addEventListener('click',function(){
    document.querySelector('.gnb').classList.toggle('gnbopen');
    document.querySelector('.menu-cbt').classList.toggle('show');

});

// $('.menu-cbt').click(function(){
//     $('.gnb').toggleClass('gnbopen');
//     $('.menu-cbt').toggleClass('show');
// });
//닫기버튼 누르면 메뉴  닫고 닫기 버튼도 안보이기
document.querySelector('.menu-cbt').addEventListener('click',function(){
    document.querySelector('.gnb').classList.toggle('gnbopen');
    document.querySelector('.menu-cbt').classList.toggle('show');

});



//gnb 메뉴 클릭시 천천히 올라가기
function scrollTopAnimated() {
    $("html, body").animate(
        { scrollTop: "0" }, 700);
}

function scrollTopAnimated1() {
    $("html, body").animate(
        { scrollTop: "700" }, 700);
}
function scrollTopAnimated2() {
    $("html, body").animate(
        { scrollTop: "1200" }, 700);
}
function scrollTopAnimated3() {
    $("html, body").animate(
        { scrollTop: "1700" }, 700);
}
function scrollTopAnimated4() {
    $("html, body").animate(
        { scrollTop: "2600" }, 700);
}



/* 메뉴창 스타일 */


//높이에 따라 투명도 조절
//실제높이 찾기
// $(window).scroll(function(){
//     var 높이 = $(window).scrollTop();
//     console.log(높이);


// //0~670 까지 스크롤바를 내리면 첫번째 카드 투명도 1~0으로  서서희변경해주세요
//     // //y = a * 높이 + b
// //     1 = a * 650 + b
// // 0 = a * 1150 + b

// // 이거 수식 두개를 뺄 수 있습니다 등호 왼쪽끼리, 오른쪽끼리 빼면 됩니다 

// // 빼면 1 = -500a 가 나옵니다

// // 그래서 a = -1/500 

// // 그리고 이걸 위의 식 하나에 대입하면 b는 나옵니다
 //var a = -1/500;
     //var y = -1/700 * 높이 + 1;
//변수 yy 구하는 식  
// //1= a*700+b
// // 0=a*1200+b

// // 1= -500a
// // a=-1/500
// // b=24/100 = 12/50
//      var yy = a * 높이  + 2.4;
//      var yyy = a * 높이  + 3.4;
//     $('.card-box').eq(0).css('opacity',y);
//     $('.card-box').eq(1).css('opacity',yy);
//     $('.card-box').eq(2).css('opacity',yyy);
// });

window.addEventListener('scroll', function(){
    var 높이 = document.documentElement.scrollTop;
    console.log(높이);

    var a = -1/500;
    var y = -1/700 * 높이 + 1;
    var yy = a * 높이  + 2.4;
    var yyy = a * 높이  + 3.4;
    var yyyy = a * 높이 + 4.4;

    document.getElementsByClassName('card-box')[0].style.opacity = y;
    document.getElementsByClassName('card-box')[1].style.opacity = yy;
    document.getElementsByClassName('card-box')[2].style.opacity = yyy;
    document.getElementsByClassName('card-box')[3].style.opacity = yyyy;
  });
//높이에 따라 투명도 조절



//슬라이드 이미지
var 지금사진 = 50;


$('.next').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-' + 지금사진 + 'vw)');
    지금사진 += 50;
    console.log(지금사진);
    if(지금사진 == 200){
      $('.slide-container').css('transform', 'translateX(0vw)');
      return 지금사진 = 50;
    }
})

    $('.before').on('click',function(){
      if(지금사진 == 150){
        $('.slide-container').css('transform','translateX(-50vw');
        지금사진-=50;
        console.log(지금사진);
      }else if(지금사진 == 100){
       $('.slide-container').css('transform','translateX(0vw');
       지금사진-=50
       console.log(지금사진);
     }else if(지금사진 == 50){
      $('.slide-container').css('transform','translateX(-100vw');
      console.log(지금사진); 
      return 지금사진 = 150;
       
     };

    });

     document.querySelector('.next').addEventListener('click',function(){
        if(지금사진 == 100){
           $('.slide-txt-1').addClass('txt1-move');
           $('.slide-txt-1').removeClass('before0-move')
             $('.slide-txt-1').removeClass('before1-move')
             $('.slide-txt-1').removeClass('before2-move')
        }
        else if(지금사진 == 150){
            $('.slide-txt-1').removeClass('txt1-move');
            $('.slide-txt-1').removeClass('before0-move')
             $('.slide-txt-1').removeClass('before1-move')
             $('.slide-txt-1').removeClass('before2-move')
            $('.slide-txt-1').addClass('txt2-move');
           
         }else if(지금사진 < 200){
             $('.slide-txt-1').removeClass('txt2-move');
             $('.slide-txt-1').removeClass('before0-move')
             $('.slide-txt-1').removeClass('before1-move')
             $('.slide-txt-1').removeClass('before2-move')
             $('.slide-txt-1').addClass('txt0-move'); 
             
         }
      
     });

     document.querySelector('.before').addEventListener('click',function(){
         if(지금사진 == 100){
            $('.slide-txt-1').removeClass('txt0-move')
            $('.slide-txt-1').removeClass('txt1-move')
            $('.slide-txt-1').removeClass('txt2-move')
            $('.slide-txt-1').addClass('before1-move')
        }else if(지금사진 == 50){
            $('.slide-txt-1').removeClass('before1-move')
            $('.slide-txt-1').removeClass('txt0-move')
            $('.slide-txt-1').removeClass('txt1-move')
            $('.slide-txt-1').removeClass('txt2-move')
            $('.slide-txt-1').addClass('before2-move')
        }else{
            $('.slide-txt-1').removeClass('before2-move')
            $('.slide-txt-1').removeClass('txt0-move')
            $('.slide-txt-1').removeClass('txt1-move')
            $('.slide-txt-1').removeClass('txt2-move')
            $('.slide-txt-1').addClass('before0-move')

        }

     });


document.getElementsByClassName('button-success')[0].addEventListener('click',function(){
     alert('전송완료');
 });

 
    
