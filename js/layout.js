$(document).ready(function(){


    // tab_menu
    $('.tab').click(function(){

        $('.tab_menu').animate({

            right: 0,

        });

    });

    $('.tab_close').click(function(){

        $('.tab_menu').animate({

            right: -600,

        });

    });

    // search
    $('.search').click(function(){

        $('.search_menu').animate({

            top:0,

        });

    });

    $('.search_close').click(function(){

        $('.search_menu').animate({

            top: -980,

        });

    });





    // main_banner
    var sc = $('.slider ul li').length;
    var sw = $('.slider ul li').width();
    var sh = $('.slider ul li').height();
    var stw = sc * sw;

    $('.slider').css({
        width: sw,
        height: sh,
        
    });

    $('.slider ul').css({
        width: stw,
        marginLeft: -sw, 
    });

    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft(){
        $('.slider ul').animate({

            left: + sw

        },500,function(){

            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '0');

        });

    };

    $('.left').click(function(){

        moveLeft();

    });


    function moveRight(){
        $('.slider ul').animate({

            left: - sw

        },500,function(){

            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left' , '0');

        });

    };

    $('.right').click(function(){

        moveRight();

    });



    var num = 1;

    $('.right').click(function(){

        if(num>2){
            num=0;
        }

         num++;

        $('.text span').text(num);

    });

    $('.left').click(function(){

        if(num<2){
            num=4;
        }

        num--;

        $('.text span').text(num);

    });




    


    // section02,section03
    $(window).scroll(function(){

        sct = $(window).scrollTop();
    
    });


    $(window).scroll(function(){

        console.log(sct);

        if(sct>600){
            $('.sec02_img').animate({

                left: 0,
                opacity: 1,

            },1000);

        }



        if(sct>1200){
            $('.sec03 video').css('opacity','1');
        }else{
            $('.sec03 video').css('opacity','0');
        }
    
    
    });  


    // section04
    var a = 0;

    $('.right02').click(function(){

        a++;

        if(a>2){
            a=2;
        }

        $('.care01').animate({
            left: -400*a,
        });

        $('.slide_main_line').animate({

            left: 625,

        });

    });

    $('.left02').click(function(){

        a--;

        if(a<0){
            a=0;
        }

        $('.care01').animate({
            left: -400*a,
        });



        $('.slide_main_line').animate({

            left: 0,

        });
        

    });




    var c = 0;
    var d = 0;

    $('.right03').click(function(){

        c++;

        if(c>4){
            c=4;
        }

        $('.care02').animate({
            left: -400*c,
        });


        d++;

        if(d>3){
            d=3;
        }

        $('.slide_main_line02').animate({

            left: 295*d,

        });

    });

    $('.left03').click(function(){

        c--;

        if(c<0){
            c=0;
        }

        $('.care02').animate({
            left: -400*c,
        });

        

        d--;

        if(d<0){
            d=0;
        }

        $('.slide_main_line02').animate({

            left: 295*d,

        });

    });

    // top_btn

    $('.top_btn').click(function(){

        $('html,body').animate({

            scrollTop:0,

        },1000);

    });


    


});//end
