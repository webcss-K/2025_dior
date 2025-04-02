// INITIALIZATION OF DATERANGEPICKER
// =======================================================
//오픈 월
$('.flatpickr').flatpickr({
  wrap:true,
  plugins: [
    new monthSelectPlugin({
      shorthand: false, //defaults to false
      dateFormat: "Y-m", //defaults to "F Y"
      altFormat: "Y-m", //defaults to "F Y"
    })
]
});

  //예약 일시
  $('#reservationSet').daterangepicker({
    autoApply: true,
    autoUpdateInput: false,
    timePicker: true,
    timePicker24Hour:true,
    opens: 'center',
    locale: {
        format: 'YYYY-MM-DD hh:mm A',
        separator: ' ~ '
    }
}, function(start, end, label) {
    document.querySelector('#reservationSet').value = start.format('YYYY-MM-DD hh:mmA') + ' ~ ' + end.format('YYYY-MM-DD hh:mmA')
});

