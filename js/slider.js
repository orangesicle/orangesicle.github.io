$(document).ready(function() {
  $('.open-popup').magnificPopup({
  items: {
  src: '<div class="white-popup">' +
        '<h3 id="headline">' + 'Trump Bingo' + '</h3>' +
      '<div class="img-popup">' +
       '<img src="Trump_Bingo.jpg">' +
      '<video src="Trump_Bingo_Demo.mov" preload controls>' + 
      '</video>' +
      '</div>' + 
      '</div>', 
  type:'inline'
},
  closeBtnInside: true,
  midClick: true
   // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
 $('#airbnb').magnificPopup({
  items: {
      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'AirBnB' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="AirBnB_Host_Certified.jpg">' +
         '</div>' + 
      '</div>',
      type: 'inline'
  },
  closeBtnInside: true,
  midClick: true

 });

  $('#heartbeats').magnificPopup({
  items: [{
      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Heart Beats' + '</h3>' +
     '<div class="img-popup">' +
      '<img src="HeartBeats.jpg">' +
         '</div>' +
      '</div>',
      title: 'Heart Beats 2',
      type: 'inline'
  },
     {
      src: '<div class="white-popup">' +
       '<h3 id="headline">' + 'Heart Beats' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="HeartBeats_PG2.jpeg">' +
         '</div>' + 
      '</div>',
      title: 'Heart Beats 2',
      type: 'inline'
    } 
  ],
  gallery: {
      enabled: true
    },
  type: 'inline'
 });

  $('#grace-blog').magnificPopup({
  items: [{

      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Blog Post 1' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="./grace-cathedral/GC_Blog_1.jpeg">' +
         '</div>' + 
      '</div>',
      title: 'grace cathedral blog post',
      type: 'inline'
  },
   {
      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Blog Post 2' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="./grace-cathedral/GC_Blog_2.jpeg">' +
         '</div>' + 
      '</div>',
      title: 'grace cathedral blog post',
      type: 'inline'
    } 
  ],

  gallery: {
      enabled: true
    },
    type: 'inline'// this is a default type

 });

  $('#grace-social').magnificPopup({
  items: [{

      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Tweets' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="./grace-cathedral/GC_Tweets_Combined.png">' +
         '</div>' + 
      '</div>',
      title: 'grace cathedral tweets' ,
      type: 'inline'
    }, 
    
    {
      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Website Copy' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="./grace-cathedral/GC_Website_Copy.png">' +
         '</div>' + 
      '</div>',
      title: 'grace cathedral website copy',
      type: 'inline'
    }, 

    {
      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Website Copy 2' + '</h3>' +
        '<div class="img-popup">' +
      '<img src="./grace-cathedral/GC_Website_Copy_2.png">' +
         '</div>' + 
      '</div>',
      title: 'grace cathedral website copy',
      type: 'inline'
    }

  ],
  gallery: {
      enabled: true
    },
    type: 'inline'// this is a default type

 });
     $('#grace-bulletin').magnificPopup({
  items: [{

      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Bulletin Redesign' + '</h3>' +
        '<div class="img-popup">' +
      '<object data="./grace-cathedral/Wrapper_Redesign_FINAL.pdf" type="application/pdf">' +
      '</object>' +
         '</div>' + 
      '</div>',
      type: 'inline'
  },
  {
      src: '<div class="white-popup">' +
      '<h3 id="headline">' + 'Grace Cathedral Copy' + '</h3>' +
        '<div class="img-popup">' +
      '<object data="./grace-cathedral/Grace CathedralAn announcement from the Dean.pdf" type="application/pdf">' +
      '</object>' +
         '</div>' + 
      '</div>',
      type: 'inline'
    }

  ],
  gallery: {
      enabled: true
    },
    type: 'inline'// this is a default type

 });

 $('.resume').magnificPopup({
     items: {
      src: '<div class="img-popup">' +
    
      '<object data="Ada_Resume.pdf" type="application/pdf">' +
      '</object>' +
         
      '</div>',
      type: 'inline'
  },
  closeBtnInside: true,
  midClick: true
});


  $('#freelance').magnificPopup({
    items: [{

      src: '<div class="white-popup">' +
        '<div class="img-popup">' +
      '<img src="powder-room.jpg">' +
         '</div>' + 
      '</div>',
      title: 'Powder Room Magazine Writer', 
      type: 'inline'
  },
  {
      src: '<div class="white-popup">' +
        '<div class="img-popup">' +
      '<img src="julie-mollo.jpg">' +
         '</div>' + 
      '</div>',
      title: 'Julie Mollo Website Copy',
      type: 'inline'
  },
  {
     src: '<div class="white-popup">' +
        '<div class="img-popup">' +
      '<object data="press-release.pdf" type="application/pdf">' +
      '</object>' +
         '</div>' + 
      '</div>',
      title: 'Mountain View Chamber of Commerce',
      type: 'inline'
  }],
  gallery: {
      enabled: true
    },
    type: 'inline'// this is a default type

 });

 // $('.powder').magnificPopup({
 //  items: {
 //      src: '<div class="white-popup">' +
 //        '<div class="img-popup">' +
 //      '<img src="powder-room.jpg">' +
 //         '</div>' + 
 //      '</div>',
 //      type: 'inline'
 //  },
 //  closeBtnInside: true,
 //  midClick: true

 // });

 // $('.julie').magnificPopup({
 //  items: {
 //      src: '<div class="white-popup">' +
 //        '<div class="img-popup">' +
 //      '<img src="julie-mollo.jpg">' +
 //         '</div>' + 
 //      '</div>',
 //      type: 'inline'
 //  },
 //  closeBtnInside: true,
 //  midClick: true

 // });


});
