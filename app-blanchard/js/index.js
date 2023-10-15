
window.addEventListener('DOMContentLoaded', function () {

  const params = {
    btnClassName: "header__bottom-item",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();

  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__menu').classList.toggle('header__menu-is-active');
  });

  document.querySelector('.header__menu-x').addEventListener('click', function () {
    document.querySelector('.header__menu').classList.toggle('header__menu-is-active');
  });

  document.querySelector('.header__search-btn-btn').addEventListener('click', function () {
    document.querySelector('.header__search').classList.toggle('header__search-is-active');
  });

  document.querySelector('.header__search-x').addEventListener('click', function () {
    document.querySelector('.header__search').classList.toggle('header__search-is-active');
  });


  var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});



  const swiper1 = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  });

  const swiper2 = new Swiper('.gallery__swiper', {
    slidesPerColumnFill: "row",
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 20,
      pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.gallery__swiper-btn-next',
      prevEl: '.gallery__swiper-btn-prev',
    },
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },

    breakpoints: {
      490: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1600: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      }
    },

      a11y: false,

  on: {
    /* исправляет баг с margin-top остающимся при смене брейкпоинта */
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "20px";
      });
    }
  }
});

  const swiper3 = new Swiper('.editions__swiper', {
    loop: true,
      pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.editions__swiper-btn-next',
      prevEl: '.editions__swiper-btn-prev',
    },
    pagination: {
      el: '.editions__swiper-pagination',
      type: 'fraction',
    },

    breakpoints: {
      490: {
        slidesPerView: 2,
        spaceBetween: 24,
       },

    700: {
      slidesPerView: 2,
      spaceBetween: 34,

    },

     800: {
      slidesPerView: 2,
      spaceBetween: 34,
     },

     1530: {
      slidesPerView: 3,
      spaceBetween: 20,
     },

      1650: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }

  });


  const swiper4 = new Swiper('.projects__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
      pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.projects__swiper-btn-next',
      prevEl: '.projects__swiper-btn-prev',
    },
    breakpoints: {
      490: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },

      1021: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },

      1391: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
   }

  });


  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false
  });

  document.querySelectorAll('.catalog__tab-btn').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__tab-content-active');

      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-active');

    });

  });

  document.querySelectorAll('.catalog__btn-france').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content-left-france').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__france-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__france-active');
      $( ".catalog__accordion-one" ).accordion( "refresh" );
    });
  });

  document.querySelectorAll('.catalog__btn-germany').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content-left-germany').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__active-germany');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__active-germany');
      $( ".catalog__accordion-two" ).accordion( "refresh" );
    });
  });

  document.querySelectorAll('.catalog__btn-italy').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content-left-italy').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__italy-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__italy-active');
    });
  });

  document.querySelectorAll('.catalog__btn-russia').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content-left-russia').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__russia-active');

      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__russia-active');
      $( ".catalog__accordion-four" ).accordion( "refresh" );
    });
  });

  document.querySelectorAll('.catalog__btn-belgium').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__content-left-belgium').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__belgium-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__belgium-active');
      $( ".catalog__accordion-five" ).accordion( "refresh" );
    });
  });

  $( function() {
    $( "#accordion-one" ).accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });
});

  $( function() {
    $( "#accordion-two" ).accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });
});

  $( function() {
    $( "#accordion-three" ).accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });
});

  $( function() {
    $( "#accordion-four" ).accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });
});

  $( function() {
    $( "#accordion-five" ).accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });
});


  document.querySelectorAll('.catalog__right-tab-btn').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-content__left').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-content-left__active');

      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content-left__active');

    });

  });


  $(function() {
    $('.events__btn-btn').click(function(){
      $('.events__item:nth-child(n+4)').slideToggle('');
  });
  });

  const btn = document.querySelector(".events__btn-btn");
  const content = document.querySelector(".events__item");
  btn.addEventListener("click", btnClick);

  function btnClick() {
      console.log(content.classList);

      if (content.classList.contains("hidden")) {
          btn.textContent = "Все события";
      } else {
          btn.textContent = "Скрыть";
      }

      content.classList.toggle("hidden");
    }


  $(function(){
    $('.editions__click-mobile').click(function(){
      $('.editions__left-checkbox').slideToggle('');
    });
  });

  ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "370px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "300px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989], {},
     {
       iconLayout: 'default#image',
       iconImageHref: '/img/map.svg',
       iconImageSize: [20,20],
       iconImageOffset: [1, 40]
     }
  );

  myMap.geoObjects.add(myPlacemark);
}


    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);


    new JustValidate('.contacts__form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 30
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
      }
    },
      messages: {
        name: {
        required: 'Недопустимый формат',
        minLength: 'Недопустимый формат'
        },
        tel: 'Недопустимый формат'

      }
    });


  const slider = document.querySelector('.events__swiper');

  let mySwiper;

  function mobileslider() {
    if (window.innerWidth <= 759 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper (slider, {
        loop: true,
        slidesPerView: 1,
        slideСlass: 'events__item',
        pagination: {
          el: '.events__pagination',
          clickable: true,
        },
      });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 759 && mySwiper) {
        slider.dataset.mobile = 'false';
        mySwiper.destroy();
      }
    }

    mobileslider();

    window.addEventListener('resize', () => {
      mobileslider();

   });

   lazyload();

});

