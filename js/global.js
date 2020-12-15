jQuery(document).ready(function($) {

  $('#popular').click(function(evt) {
    evt.preventDefault();
    hiddenAndShowTabs('.content-tabs_tab-one');
    setActive('#popular');
  });

  $('#new_arrivals').click(function (evt) {
    evt.preventDefault();
    hiddenAndShowTabs('.content-tabs_tab-two');
    setActive('#new_arrivals');
  });

  $('#best_sellers').click(function (evt) {
    evt.preventDefault();
    hiddenAndShowTabs('.content-tabs_tab-three');
    setActive('#best_sellers');
  });

  $('#special_offers').click(function (evt) {
    evt.preventDefault();
    hiddenAndShowTabs('.content-tabs_tab-four');
    setActive('#special_offers');
  });

  $('#coming_soon').click(function (evt) {
    evt.preventDefault();
    hiddenAndShowTabs('.content-tabs_tab-five');
    setActive('#coming_soon');
  });

  function hiddenAndShowTabs(toShow) {

    let tabsContent = [
      '.content-tabs_tab-one',
      '.content-tabs_tab-two',
      '.content-tabs_tab-three',
      '.content-tabs_tab-four',
      '.content-tabs_tab-five'
    ];

    tabsContent.forEach(el => {
      if (el !== toShow) {
        $(el).css('display', 'none');
      } else {
        $(el).css('display', 'flex');
      }
    });
  }

  function setActive(item) {
    let tabNavs = [
      '#popular',
      '#new_arrivals',
      '#best_sellers',
      '#special_offers',
      '#coming_soon'
    ];

    tabNavs.forEach(el => {
      if (el === item) {
        $(el).addClass('active');

      } else {
        $(el).removeClass('active');
      }
    });
  }
});
