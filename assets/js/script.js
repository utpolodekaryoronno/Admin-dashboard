$(document).ready(function(){
  var $niceSelect1 = $('.ad-small-niceSelect'),
      $select2 = $('.ad-select2'),
      $taginput = $('.ad-tagsinput');


    // Screen Width 
    let bodywidth = screen.width;

    // Nice Select 
    if ($niceSelect1.length > 0){
      $($niceSelect1).niceSelect();
    }

    $('.select-option').niceSelect();

    // Select 2
    if ($select2.length > 0) {
      $select = $(".ad-select2").select2({});
      $select.each(function() {
        if ($(this).data('select2')) {
          $(this).data('select2').$dropdown.addClass('select-drop');
        }
      });
    }


    // tagify
    if ($taginput.length > 0){
      $($taginput).tagify({
        duplicates :false
      });
    }


    // Main Menu Language Select 
    $('.img-text-select .drop-content .drop-ul li').click(function (e) {
        e.preventDefault();
        var value = $(this).find('.select-text').text();
        var icon = $(this).find('.select-image').html();
        $('.selected-text').val(value);
        var item = icon + " " + value
        $('.selected-show').empty().append(item);
    });
    // Language Select class add remove
    const langToggle = $(".selected-show");
    const langmenu = $(".drop-content");
    langToggle.on("click", function(event) {
        event.stopPropagation();
        langmenu.toggleClass("active");
        langToggle.toggleClass("active");
        // Notification
        notiWrap.removeClass("active");
        notiToggle.removeClass("active");
        // Profile 
        profileMenu.removeClass("active");
        profileToggle.removeClass("active");
        // Search 
        searchWrap.removeClass("active");
        searchToggle.removeClass("active");
    });
    $(document).on("click", function(event) {
        const target = $(event.target);
        if (!langToggle.is(target) && !langmenu.is(target)) {
          langmenu.removeClass("active");
          langToggle.removeClass("active");
        }
    });


    // Profile Dropdown Toggle 
    const profileContainer = $(".header-dropdown-md");
    const profileToggle = $(".header-dropdown-toggle-md");
    const profileMenu = $(".header-dorpdown-menu-md");
    if (profileToggle.length) {
      profileToggle.on("click", function(event) {
            event.stopPropagation();
            profileMenu.toggleClass("active");
            profileToggle.toggleClass("active");
            // Notification
            notiWrap.removeClass("active");
            notiToggle.removeClass("active");
            // Language 
            langmenu.removeClass("active");
            langToggle.removeClass("active");
            // Search 
            searchWrap.removeClass("active");
            searchToggle.removeClass("active");
        });
    }
    $(document).on("click", function(event) {
        const target = $(event.target);
        if (profileContainer.length && !profileContainer.is(target) && !profileContainer.has(target).length) {
          profileMenu.removeClass("active");
            if (profileToggle.length) {
              profileToggle.removeClass("active");
            }
        }
    });


    // Sidebar Toggle 
    const sideToggle = $(".menu-toggler");
    const sideMenu = $(".ad-sidebar");
    if (sideToggle.length) {
      sideToggle.on("click", function(event) {
            event.stopPropagation();
            sideMenu.toggleClass("hide");
            sideToggle.toggleClass("active");
        });
    }
    

    // Mobile Search Toggle 
    const searchContainer = $(".header-mobile-search");
    const searchToggle = $(".mobile-search-label");
    const searchWrap = $(".mobile-search");
    if (searchToggle.length) {
        searchToggle.on("click", function(event) {
            event.stopPropagation();
            searchWrap.toggleClass("active");
            searchToggle.toggleClass("active");
            // Notification
            notiWrap.removeClass("active");
            notiToggle.removeClass("active");
            // Language 
            langmenu.removeClass("active");
            langToggle.removeClass("active");
            // Profile 
            profileMenu.removeClass("active");
            profileToggle.removeClass("active");
            // focus 
        setTimeout(function() {
            $('.mobile-search-inner .form-control').focus();
        }, 100);
        });
    }
    $(document).on("click", function(event) {
        const target = $(event.target);
        if (searchContainer.length && !searchContainer.is(target) && !searchContainer.has(target).length) {
            searchWrap.removeClass("active");
            if (searchToggle.length) {
                searchToggle.removeClass("active");
            }
        }
    });


    // Notification Toggle 
    const notiContainer = $(".header-dropdown-lg");
    const notiToggle = $(".header-dropdown-toggle-lg");
    const notiWrap = $(".header-dropdown-menu-lg");
    if (notiToggle.length) {
      notiToggle.on("click", function(event) {
            event.stopPropagation();
            notiWrap.toggleClass("active");
            notiToggle.toggleClass("active");
            // Search 
            searchWrap.removeClass("active");
            searchToggle.removeClass("active");
            // Language 
            langmenu.removeClass("active");
            langToggle.removeClass("active");
            // Profile 
            profileMenu.removeClass("active");
            profileToggle.removeClass("active");
        });
    }
    $(document).on("click", function(event) {
        const target = $(event.target);
        if (notiContainer.length && !notiContainer.is(target) && !notiContainer.has(target).length) {
          notiWrap.removeClass("active");
            if (notiToggle.length) {
              notiToggle.removeClass("active");
            }
        }
    });
    

    // Sidebar First Sub-Menu Toggle 
    $(".first-li-have-sub > a").on("click", function () {
      if ($( ".ad-sidebar" ).hasClass('hide')) {
        if (bodywidth < 992){
          $(this).siblings(".first-sub-menu").slideToggle();
          $(".first-sub-menu").not($(this).siblings()).slideUp();
          $(this).parent().toggleClass("active");
          $(".first-li-have-sub").not($(this).parent()).removeClass("active");
        }
      } else {
        if (bodywidth > 991){
          $(this).siblings(".first-sub-menu").slideToggle();
          $(".first-sub-menu").not($(this).siblings()).slideUp();
          $(this).parent().toggleClass("active");
          $(".first-li-have-sub").not($(this).parent()).removeClass("active");
        }
      }
    });

  // Sidebar second submenu 
  $(".second-li-have-sub > a").on("click", function () {
      $(this).parent().toggleClass("active");
      $(".second-li-have-sub").not($(this).parent()).removeClass("active");
      $(this).siblings(".second-sub-menu").slideToggle();
      $(".second-sub-menu").not($(this).siblings()).slideUp();
  });



    // user profile submenu 
    $(".dropdown-list-have-sub > a").on("click", function () {
        $(this).parent().toggleClass("active");
        $(this).siblings(".dropdown-list-submenu").slideToggle();
        $(".dropdown-list-have-sub").not($(this).parent()).removeClass("active");
        $(".dropdown-list-submenu").not($(this).siblings()).slideUp();
    });

    // hidden-search-input
    $(".search-element").on("click", function () {
        $('.hidden-search-input .form-control').toggleClass('active');
    });

    

    

 });




      // rich-alert close 
      $(document).ready(function() {
        $('.rich-alert-close').on('click', function(){
            $('.rich-alert').hide();
        }); 
      });   

      // toaster close 
      $(document).ready(function() {
        $('.toaster-close').on('click', function(){
            $('.toaster1').hide();
        }); 
      });

      $(document).ready(function() {
        $('.toaster-close2').on('click', function(){
            $('.toaster2').hide();
        }); 
      });




      // Progressbar 

      
    $("#progress-bar1").animate({ 
      width: "50%", 
}, 3000); 

$("#progress-bar2").animate({ 
      width: "60%", 
}, 3000); 

$("#progress-bar3").animate({ 
      width: "70%", 
}, 3000); 

$("#progress-bar4").animate({ 
      width: "80%", 
}, 3000); 

$("#progress-bar5").animate({ 
      width: "50%", 
}, 3000); 

$("#progress-bar6").animate({ 
      width: "60%", 
}, 3000); 

$("#progress-bar7").animate({ 
      width: "70%", 
}, 3000); 

$("#progress-bar8").animate({ 
      width: "80%", 
}, 3000); 

$("#progress-bar9").animate({ 
      width: "50%", 
}, 3000); 

$("#progress-bar10").animate({ 
      width: "60%", 
}, 3000); 

$("#progress-bar11").animate({ 
      width: "70%", 
}, 3000); 

$("#progress-bar12").animate({ 
      width: "80%", 
}, 3000); 

$("#progress-bar13").animate({ 
      width: "50%", 
}, 3000); 

$("#progress-bar14").animate({ 
      width: "60%", 
}, 3000); 

$("#progress-bar15").animate({ 
      width: "70%", 
}, 3000); 

$("#progress-bar16").animate({ 
      width: "80%", 
}, 3000);

$("#progress-bar17").animate({ 
      width: "50%", 
}, 3000); 

$("#progress-bar18").animate({ 
      width: "60%", 
}, 3000); 

$("#progress-bar19").animate({ 
      width: "70%", 
}, 3000); 

$("#progress-bar20").animate({ 
      width: "80%", 
}, 3000); 
$("#progress-bar21").animate({ 
      width: "90%", 
}, 3000); 




  // Primary Loadning
  $(function(){
    var PrimaryLoading = document.querySelector('.PrimaryLoading');
    PrimaryLoading.addEventListener("click", function() {
        PrimaryLoading.innerHTML = "Please wait...";
        PrimaryLoading.classList.add('spinning');
        
    setTimeout( 
            function  (){  
                PrimaryLoading.classList.remove('spinning');
                PrimaryLoading.innerHTML = "Primary";
                
            }, 3000);
    }, false);
});

// success loading 
$(function(){
        var SuccessLoading = document.querySelector('.SuccessLoading');
        SuccessLoading.addEventListener("click", function() {
            SuccessLoading.innerHTML = "Please wait...";
            SuccessLoading.classList.add('spinning');
            
        setTimeout( 
                function  (){  
                    SuccessLoading.classList.remove('spinning');
                    SuccessLoading.innerHTML = "Success";
                    
                }, 3000);
        }, false);
    });

 // success loading 
$(function(){
        var WarningLoading = document.querySelector('.WarningLoading');
        WarningLoading.addEventListener("click", function() {
            WarningLoading.innerHTML = "Please wait...";
            WarningLoading.classList.add('spinning');
            
        setTimeout( 
                function  (){  
                    WarningLoading.classList.remove('spinning');
                    WarningLoading.innerHTML = "Warning";
                    
                }, 3000);
        }, false);
    });

// danger loading 
$(function(){
        var DangerLoading = document.querySelector('.DangerLoading');
        DangerLoading.addEventListener("click", function() {
            DangerLoading.innerHTML = "Please wait...";
            DangerLoading.classList.add('spinning');
            
        setTimeout( 
                function  (){  
                    DangerLoading.classList.remove('spinning');
                    DangerLoading.innerHTML = "Danger";
                    
                }, 3000);
        }, false);
    });
    
    // info loading 
    $(function(){
        var InfoLoading = document.querySelector('.InfoLoading');
        InfoLoading.addEventListener("click", function() {
            InfoLoading.innerHTML = "Please wait...";
            InfoLoading.classList.add('spinning');
            
        setTimeout( 
                function  (){  
                    InfoLoading.classList.remove('spinning');
                    InfoLoading.innerHTML = "Info";
                    
                }, 3000);
        }, false);
    }); 

    // Secondary loading 
    $(function(){
        var SecondaryLoading = document.querySelector('.SecondaryLoading');
        SecondaryLoading.addEventListener("click", function() {
            SecondaryLoading.innerHTML = "Please wait...";
            SecondaryLoading.classList.add('spinning');
            
        setTimeout( 
                function  (){  
                    SecondaryLoading.classList.remove('spinning');
                    SecondaryLoading.innerHTML = "Info";
                    
                }, 3000);
        }, false);
    });




    // tooltip js 

    $(function () {

      $('#placement-top').tooltip({
          'placement': 'top',
      });

      $('#placement-bottom').tooltip({
          'placement': 'bottom',
      });

      $('#placement-right').tooltip({
          'placement': 'right',
      });

      $('#placement-left').tooltip({
          'placement': 'left',
      });

  })




//  Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map( function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
  trigger : 'hover'
  });
});


// Dashboard Accordion  
function accordion() {
  var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      // Variables privadas
      var links = this.el.find('.accordion-btn-wrap');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('active-accor');
      if (!e.data.multiple) {
          $el.find('.accoritem-body').not($next).slideUp().parent().removeClass('active-accor');
          $el.find('.accoritem-body').not($next).slideUp();
      };
  }
  var accordion = new Accordion($('.ad-my-accordion'), false);
}
accordion();
// Dashboard Accordion  




// daterangepicker
$(function(){
  $('#basic').daterangepicker();
});




// Datepicker 
$(document).ready(function(){
  $(".datepicker-autoclose").datepicker({
      autoclose: true,
      todayHighlight: true,
  });
});


// fullcalender 

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      height: 'parent',
      header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
  defaultView: 'dayGridMonth',
  defaultDate: '2023-02-12',
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: [
    {
      title: 'All Day Event',
      start: '2023-02-01',
    },
    {
      title: 'Long Event',
      start: '2023-02-07',
      end: '2023-02-10'
    },
    {
      groupId: 999,
      title: 'Repeating Event',
      start: '2023-02-09T16:00:00'
    },
    {
      groupId: 999,
      title: 'Repeating Event',
      start: '2023-02-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2023-02-11',
      end: '2023-02-13'
    },
    {
      title: 'Meeting',
      start: '2023-02-12T10:30:00',
      end: '2023-02-12T12:30:00'
    },
    {
      title: 'Lunch',
      start: '2023-02-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2023-02-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2023-02-12T17:30:00'
    },
    {
      title: 'Dinner',
      start: '2023-02-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2023-02-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2023-02-28'
    }
  ]
});

calendar.render();
});

 

  

$(document).ready(function(){
      /************************************/
    //summernote editor
    /************************************/
    $("#summernote").summernote({
      height: 120, // set editor height
      minHeight: null, // set minimum height of editor
      maxHeight: null, // set maximum height of editor
      focus: false, // set focus to editable area after initializing summernote
    });
});



$(document).ready(function(){
  // tagify 2
  $('#tagsinput-id-2').tagify({
      duplicates :false
  });     

  // tagify 3        
  $('#tagsinput-id-3').tagify({
      duplicates :false
  });

  // tagify 4
  $('#tagsinput-id-4').tagify({
      duplicates :false
  });
  
  // tagify 5
  $('#tagsinput-id-5').tagify({
      duplicates :false
  });

  // tagify 6           
  $('#tagsinput-id-6').tagify({
      duplicates :false
  });
});






// Area chart 
var options = {
    series: [{
    name: 'purpleChart',
    data: [0, 170, 150, 200, 250, 350, 470]
  }, {
    name: 'primaryChart',
    data: [500, 140, 200, 180, 300, 200, 50]
  }],
    chart: {
    height: 295,
    type: 'area'
  },
  colors: ["#0095ff49", "#884dff79"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
  },
  xaxis: {
    type: 'day',
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
};

var chart = new ApexCharts(document.querySelector("#selesChart"), options);
chart.render();



// User chart 
var options = {
  series: [
  {
    name: '',
    data: [
      {
        x: '',
        y: 500,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
          }
        ]
      },
      {
        x: '',
        y: 450,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
          }
        ]
      },
      {
        x: '',
        y: 150,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
          }
        ]
      },
      {
        x: '',
        y: 300,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
          }
        ]
      },
      {
        x: '',
        y: 500,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,                   
          }
        ]
      },
      {
        x: '',
        y: 400,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
          }
        ]
      },
      {
        x: '',
        y: 450,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
          
          }
        ]
      },
      {
        x: '',
        y: 200,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
           
          }
        ]
      },
      {
        x: '',
        y: 150,
        goals: [
          {
            name: 'User',
            value: 500,
            strokeWidth: 0,
           
          }
        ]
      }
    ]
  }
  ],
    chart: {
    height: 202,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
      show: false
  }

};

var chart = new ApexCharts(document.querySelector("#userChart"), options);
chart.render();





  // =====================================
  // pie1
  // =====================================
  var pie1 = {
    series: [25, 40, 35],
    labels: ['System', 'Your Files', 'Total admin'],
    chart: {
      width: 240,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors:[
      "#f6c000",
      "#7239ea",
      "#F4EFFD",
    ],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#pie1"), pie1);
  chart.render();






  // drag and drop js 
  //////////////////////////////////////////////////////
  document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}




      
