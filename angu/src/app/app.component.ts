import {Component, Injectable, AfterViewInit} from "@angular/core";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements AfterViewInit {

  private title: string = 'Token Asia';


  ngAfterViewInit(): void {
   
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 500);
      event.preventDefault();
    });
    
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 100
    });

    
    $('.navbar-collapse ul li a').click(function () {
      $('.navbar-toggle:visible').click();
    });


    // Offset for Main Navigation

    $('#mainNav').affix({
      offset: {
        top: 50
      }
    });

    //change logo
    var cbpAnimatedHeader = (function() {
        var docElem = document.documentElement,
                header = document.querySelector( '.navbar-default' ),
                didScroll = false,
                changeHeaderOn = 200;
        function init() {
            window.addEventListener( 'scroll', function( event ) {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        }
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                $(header).addClass('navbar-scroll')
                $('.pnglogo').css('display','block');
                $('.whitelogo').css('display','none');
            }
            else {
                $(header).removeClass('navbar-scroll')
                 $('.pnglogo').css('display','none');
                $('.whitelogo').css('display','block');
            }
            didScroll = false;
        }
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }
        init();

    })();
    //call
    $.ajax({url: "https://api.coinmarketcap.com/v1/ticker/",
     type: 'GET',
     success: function(result){
      var fData = '<div class="divTableRow"><div class="divTableCell newst">#</div><div class="divTableCell newst">Name</div>'+
      '<div class="divTableCell newst">Symbol</div><div class="divTableCell newst">Market Cap</div>'+
      '<div class="divTableCell newst">Price</div><div class="divTableCell newst">Volume</div>'+
      '<div class="divTableCell newst">Change (24h)</div></div>';
        $.each(result, function (index, value, className) { 
          if(index<10) {
            className = 'green';
              if(eval(value.percent_change_24h) < 0)
                className = 'red'
        fData += '<div class="divTableRow"><div class="divTableCell">'+value.rank+'</div><div class="divTableCell">'+value.name+'</div>'+
        '<div class="divTableCell"><span style="color:#7000b6;">'+value.symbol+'</span></div><div class="divTableCell">$'+value.market_cap_usd+'</div>'+
        '<div class="divTableCell">$<span class="blink">'+value.price_usd+'</span></div><div class="divTableCell">$'+value.total_supply+'</div>'+
        '<div class="divTableCell"><span class="score '+className+'">'+value.percent_change_24h+'</span></div></div>';
        }
        });
        $('.deepa').html(fData);
        $("#bit").html(result[0].price_usd);
        $("#eth").html(result[1].price_usd);
        $("#rip").html(result[2].price_usd);
        $("#bit-cash").html(result[3].price_usd);
        $("#lite").html(result[4].price_usd);
        $("#dash_web").html(result[9].price_usd);
        $("#dash_mob").html(result[9].price_usd);
    }
  });
  $.ajax({url: "/indexes.php",
    type: 'GET',
    dataType: "json",
     success: function(data){
      //console.log(data);
        $("#token-index").html(parseFloat(data.index).toFixed(2));
        //$("#img").attr('src',data.img);
        $("#percentage").html(parseFloat(data.percentage).toFixed(2));
    }
  });

//form
$.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");
  $(document).ready(function() {
    $(document).find(".input-block").first().click();
    $('.new-bg, .new-bg-cons, .new-bg-inves, .new-bg-tech').hide();
    $('.market').on('mouseover', function (event) {
       $('.new-bg').show();
       $('.new-bg-cons, .new-bg-inves, .new-bg-tech').hide();
    })
    $('.services').on('mouseover', function (event) {
       $('.new-bg-cons').show();
       $('.new-bg, .new-bg-inves, .new-bg-tech').hide(); 
    })
    $('.inves').on('mouseover', function (event) {
       $('.new-bg-inves').show(); 
       $('.new-bg, .new-bg-cons, .new-bg-tech').hide();
    })
    $('.tech').on('mouseover', function (event) {
       $('.new-bg-tech').show();
       $('.new-bg, .new-bg-cons, .new-bg-inves').hide(); 
    })
  });



  $(document)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function() {
    rescroll(this);
  });

  $(document).find(".input-block input").keypress(function(e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(document).find('.input-block input[type="radio"]').change(function(e) {
    moveNext(this);
  });

  $(window).on("scroll", function() {

    //console.log('chal rha hai');

    $(document).find(".input-block").each(function() {

      //alert('hi')
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(document).find(".input-block").removeClass("active");

    $(document).find(".input-block input").each(function() {
      $(this).blur();
    });
    $(e).addClass("active");
    $(e).find('input').focus();
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();


  }
}
