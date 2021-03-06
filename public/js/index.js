$(document).ready(function(){   
   
    if(!localStorage.getItem('lang')) {
        localStorage.setItem("lang", "");
    } 
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('lang')){
        var lang = searchParams.get('lang');
        localStorage.clear();
        localStorage.setItem("lang", lang);
    }
    function setLanguage(lang) {
        localStorage.clear();
        localStorage.setItem("lang", lang);
        var pageURL = $(location).attr("href");
        var i = pageURL.indexOf('?');
        pageURL = pageURL.substring(0, i != -1 ? i : pageURL.length);
        if(lang === "es"){
            window.location.href = pageURL + "?lang=es";
        } else {
            window.location.href = pageURL;
        }
    }
    $("#langEn").on("click", () => {
        setLanguage("en");     
    });
    $("#langEs").on("click", () => {
        setLanguage("es");       
    });
    $(document).on('click', '.nav-link', function () {
        var href = $(this).attr("href");
        var lang = localStorage.getItem("lang");
        if(lang === "es") {
            $(this).attr("href", href + "?lang=es");
        }
    });
      var prices = {
        travis_wilco: {
            reg: 60,
            rush: 75,
            priority: 90,
            sameday: 110
        },
        statewide: {
            reg: 75,
            rush: 90,
            priority: 105,
            sameday: 125
        },
        nationwide: {
            reg: 90,
            rush: 105,
            priority: 120,
            sameday: 140
        }
    }
    
    $("#travis_wilco").on("click", function(e){
        e.preventDefault();
        priceInit(this.id);
        $(".price-nav__item__link").removeClass("active");
        $("#travis_wilco").addClass("active");
    })
    $("#statewide").on("click", function(e){
        e.preventDefault();
        priceInit(this.id);
        $(".price-nav__item__link").removeClass("active");
        $("#statewide").addClass("active");
    })
    $("#nationwide").on("click", function(e){
        e.preventDefault();
        priceInit(this.id);
        $(".price-nav__item__link").removeClass("active");
        $("#nationwide").addClass("active");
    })
    function priceInit(area) {
        switch (area) {
            case "travis_wilco":
                $(".price-table__row__price--text").removeClass('fadeIn');
                setTimeout(function(){
                    $(".price-table__row__price--text").addClass('fadeIn');
                    $("#priceReg").text("$" + prices.travis_wilco.reg);
                    $("#priceRush").text("$" + prices.travis_wilco.rush);
                    $("#pricePriority").text("$" + prices.travis_wilco.priority);
                    $("#priceSameDay").text("$" + prices.travis_wilco.sameday);
                }, 50);                
                break;

            case "statewide":
                $(".price-table__row__price--text").removeClass('fadeIn');
                setTimeout(function(){
                    $(".price-table__row__price--text").addClass('fadeIn');
                    $("#priceReg").text("$" + prices.statewide.reg);
                    $("#priceRush").text("$" + prices.statewide.rush);
                    $("#pricePriority").text("$" + prices.statewide.priority);
                    $("#priceSameDay").text("$" + prices.statewide.sameday);
                }, 50); 

            break;

            case "nationwide":
                $(".price-table__row__price--text").removeClass('fadeIn');
                setTimeout(function(){
                    $(".price-table__row__price--text").addClass('fadeIn');
                    $("#priceReg").text("$" + prices.nationwide.reg);
                    $("#priceRush").text("$" + prices.nationwide.rush);
                    $("#pricePriority").text("$" + prices.nationwide.priority);
                    $("#priceSameDay").text("$" + prices.nationwide.sameday);
                }, 50); 

            break;
        }       
    }

    function initPriceTables() {
       
        $("#travis_wilco").click();
    }

    initPriceTables();
});