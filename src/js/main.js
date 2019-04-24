/* TOGGLE CLASSES FOR LIST ITEMS ON NAVIGATION */

let activeNavItem = $(".nav_listing .listing_item.clickable_listing_item");

activeNavItem.click(function () {
  $('.active_listing_item').removeClass('active_listing_item');
  $(this).addClass('active_listing_item');
});

/* DROPDOWN BUTTONS CLICK FUNCTIONS */

function DropdownToggle() {

  let headerDropdown = $(".dropdown-menu.header-dropdowm-menu");
  let headerDropdownText = $(".dropdown-menu.header-dropdowm-menu a");
  let headerBtn = $(".main__header .right_part .dropdown button");
  let headerBtnText = $(".btn.dropdown-toggle.header-btn:first-child span");

  let firstWidgetDropdown = $(".dropdown-menu.first-widget-dropdown-menu");
  let firstWidgetDropdownText = $(".dropdown-menu.first-widget-dropdown-menu a");
  let firstWidgetBtn = $(".entry_dropdown button");
  let firstWidgetBtnText = $(".entry_dropdown button span");

  headerBtn.click(function () {
    headerDropdown.toggle();
  });

  headerDropdownText.each(function (index) {

    $(this).on("click", function () {
      headerBtnText.text($(this).text());
      headerDropdown.toggle();
    });
  });

  firstWidgetBtn.click(function () {
    firstWidgetDropdown.toggle();
  });

  firstWidgetDropdownText.each(function (index) {

    $(this).on("click", function () {
      firstWidgetBtnText.text($(this).text());
      firstWidgetDropdown.toggle();
    });
  });
}

DropdownToggle();

/* MAIN TABS CLICK EVENT THAT CHANGES ITS CLASS AND SUBTABS CONTENT */

function showWidgets() {

  let mainTabs = $('.tabs_item_container .tabs_item');
  let widget = $('.widget');
  let messengerWidget = $('.messenger_widget');

  mainTabs.click(function () {
    $('.active_tab').removeClass('active_tab');
    $(this).addClass('active_tab');

    if ($(this).hasClass("messenger_tab")) {
      widget.hide();
      messengerWidget.show();
      messengerWidget.addClass('fadeInUp');
    }
    else {
      widget.show();
      widget.addClass('fadeInUp');
      messengerWidget.hide();
    }
  });

  $(function ($) {
    $("[contenteditable]").focusout(function () {
      var element = $(this);
      if (!element.text().trim().length) {
        element.empty();
      }
    });
  });
}

showWidgets();

/* change search and dropdown icons on hover and focus in the widget container items*/

function changeImages() {

  let containerDropdownArrows = $(".left_part_item_container .container_item .item_dropdown");
  let containerSearchIcons = $(".left_part_item_container .container_item .item_search");

  containerDropdownArrows.hover(
    function () {
      $(this).find('img').attr("src", "img/ui/dropdown_arrow_white.png");
    },
    function () {
      $(this).find('img').attr("src", "img/ui/dropdown_arrow.png");
    }
  );

  containerDropdownArrows.focus(
    function () {
      $(this).find('img').attr("src", "img/ui/dropdown_arrow_white.png");
    },
    function () {
      $(this).find('img').attr("src", "img/ui/dropdown_arrow.png");
    }
  );

  containerSearchIcons.hover(
    function () {
      $(this).find('img').attr("src", "img/ui/zoom_icon_white.png");
    },
    function () {
      $(this).find('img').attr("src", "img/ui/zoom_icon.png");
    }
  );

  containerSearchIcons.focus(
    function () {
      $(this).find('img').attr("src", "img/ui/zoom_icon_white.png");
    },
    function () {
      $(this).find('img').attr("src", "img/ui/zoom_icon.png");
    }
  );
}

changeImages();

/* Toggle Subitems when dropdown image of a Container item in hte Left Part Widget is clicked */

function toggleSubitems() {

  let firstItemdropdown = $(".first_item_block_wrapper .container_item .item_dropdown");
  let firstItemsubitems = $(".first_item_block_wrapper .container_subitem");
  let secondItemdropdown = $(".second_item_block_wrapper .container_item .item_dropdown");
  let secondItemsubitems = $(".second_item_block_wrapper .container_subitem");
  let thirdItemdropdown = $(".third_item_block_wrapper .container_item .item_dropdown");
  let thirdItemsubitems = $(".third_item_block_wrapper .container_subitem");
  let fourthItemdropdown = $(".fourth_item_block_wrapper .container_item .item_dropdown");
  let fourthItemsubitems = $(".fourth_item_block_wrapper .container_subitem");
  let fifthItemdropdown = $(".fifth_item_block_wrapper .container_item .item_dropdown");
  let fifthItemsubitems = $(".fifth_item_block_wrapper .container_subitem");
  let sixthItemdropdown = $(".sixth_item_block_wrapper .container_item .item_dropdown");
  let sixthItemsubitems = $(".sixth_item_block_wrapper .container_subitem");
  let seventhItemdropdown = $(".seventh_item_block_wrapper .container_item .item_dropdown");
  let seventhItemsubitems = $(".seventh_item_block_wrapper .container_subitem");
  let eighthItemdropdown = $(".eighth_item_block_wrapper .container_item .item_dropdown");
  let eighthItemsubitems = $(".eighth_item_block_wrapper .container_subitem");
  let ninthItemdropdown = $(".ninth_item_block_wrapper .container_item .item_dropdown");
  let ninthItemsubitems = $(".ninth_item_block_wrapper .container_subitem");
  let tenthItemdropdown = $(".tenth_item_block_wrapper .container_item .item_dropdown");
  let tenthItemsubitems = $(".tenth_item_block_wrapper .container_subitem");

  firstItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      firstItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  secondItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      secondItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  thirdItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      thirdItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  fourthItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      fourthItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  fifthItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      fifthItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  sixthItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      sixthItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  seventhItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      seventhItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  eighthItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      eighthItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  ninthItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      ninthItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });

  tenthItemdropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass("rotateDropdown");
      tenthItemsubitems.each(function (index) {
        $(this).toggle();
        $(this).toggleClass("displayFlex");
        $(this).toggleClass("fadeInUp");
      });
    });
  });
}

toggleSubitems();


/*Show extra avatar images in subitems*/

function showMoreImgThumbnail() {

  let showFirstthumbnailAvatars = $(".first_item_block_wrapper .more_avatars_item");
  let showSecondthumbnailAvatars = $(".second_item_block_wrapper .more_avatars_item");
  let showThirdthumbnailAvatars = $(".third_item_block_wrapper .more_avatars_item");
  let showFourththumbnailAvatars = $(".fourth_item_block_wrapper .more_avatars_item");
  let showFifththumbnailAvatars = $(".fifth_item_block_wrapper .more_avatars_item");
  let showSixththumbnailAvatars = $(".sixth_item_block_wrapper .more_avatars_item");
  let showSevenththumbnailAvatars = $(".seventh_item_block_wrapper .more_avatars_item");
  let showEighththumbnailAvatars = $(".eighth_item_block_wrapper .more_avatars_item");
  let showNinththumbnailAvatars = $(".ninth_item_block_wrapper .more_avatars_item");
  let showTenththumbnailAvatars = $(".tenth_item_block_wrapper .more_avatars_item");

  let firstBlockAvatars = $(".first_item_block_wrapper .subitem_avatars > div").size();
  let secondBlockAvatars = $(".second_item_block_wrapper .subitem_avatars > div").size();
  let thirdBlockAvatars = $(".third_item_block_wrapper .subitem_avatars > div").size();
  let fourthBlockAvatars = $(".fourth_item_block_wrapper .subitem_avatars > div").size();
  let fifthBlockAvatars = $(".fifth_item_block_wrapper .subitem_avatars > div").size();
  let sixthBlockAvatars = $(".sixth_item_block_wrapper .subitem_avatars > div").size();
  let seventhBlockAvatars = $(".seventh_item_block_wrapper .subitem_avatars > div").size();
  let eighthBlockAvatars = $(".eighth_item_block_wrapper .subitem_avatars > div").size();
  let ninthBlockAvatars = $(".ninth_item_block_wrapper .subitem_avatars > div").size();
  let tenthBlockAvatars = $(".tenth_item_block_wrapper .subitem_avatars > div").size();

  let x = 3;
  let y = 3;
  let z = 3;
  let a = 3;
  let b = 3;
  let c = 3;
  let d = 3;
  let e = 3;
  let f = 3;
  let g = 3;

  $(document).ready(function () {

    x = 3;
    y = 3;
    z = 3;
    a = 3;
    b = 3;
    c = 3;
    d = 3;
    e = 3;
    f = 3;
    g = 3;

    $('.first_item_block_wrapper .subitem_avatars > div:lt(' + x + ')').show();
    $('.second_item_block_wrapper .subitem_avatars > div:lt(' + y + ')').show();
    $('.third_item_block_wrapper .subitem_avatars > div:lt(' + z + ')').show();
    $('.fourth_item_block_wrapper .subitem_avatars > div:lt(' + a + ')').show();
    $('.fifth_item_block_wrapper .subitem_avatars > div:lt(' + b + ')').show();
    $('.sixth_item_block_wrapper .subitem_avatars > div:lt(' + c + ')').show();
    $('.seventh_item_block_wrapper .subitem_avatars > div:lt(' + d + ')').show();
    $('.eighth_item_block_wrapper .subitem_avatars > div:lt(' + e + ')').show();
    $('.ninth_item_block_wrapper .subitem_avatars > div:lt(' + f + ')').show();
    $('.tenth_item_block_wrapper .subitem_avatars > div:lt(' + g + ')').show();

    showFirstthumbnailAvatars.click(function () {
      x = (x + 3 <= firstBlockAvatars) ? x + 3 : firstBlockAvatars;
      $('.first_item_block_wrapper .subitem_avatars > div:lt(' + x + ')').show();
      if (x == firstBlockAvatars) {
        showFirstthumbnailAvatars.hide();
      }
    });
    showSecondthumbnailAvatars.click(function () {
      y = (y + 3 <= secondBlockAvatars) ? y + 3 : secondBlockAvatars;
      $('.second_item_block_wrapper .subitem_avatars > div:lt(' + y + ')').show();
      if (y == secondBlockAvatars) {
        showSecondthumbnailAvatars.hide();
      }
    });
    showThirdthumbnailAvatars.click(function () {
      z = (z + 3 <= thirdBlockAvatars) ? z + 3 : thirdBlockAvatars;
      $('.third_item_block_wrapper .subitem_avatars > div:lt(' + z + ')').show();
      if (z == thirdBlockAvatars) {
        showThirdthumbnailAvatars.hide();
      }
    });
    showFourththumbnailAvatars.click(function () {
      a = (a + 3 <= fourthBlockAvatars) ? a + 3 : fourthBlockAvatars;
      $('.fourth_item_block_wrapper .subitem_avatars > div:lt(' + a + ')').show();
      if (a == fourthBlockAvatars) {
        showFourththumbnailAvatars.hide();
      }
    });
    showFifththumbnailAvatars.click(function () {
      b = (b + 3 <= fifthBlockAvatars) ? b + 3 : fifthBlockAvatars;
      $('.fifth_item_block_wrapper .subitem_avatars > div:lt(' + b + ')').show();
      if (b == fifthBlockAvatars) {
        showFifththumbnailAvatars.hide();
      }
    });
    showSixththumbnailAvatars.click(function () {
      c = (c + 3 <= sixthBlockAvatars) ? c + 3 : sixthBlockAvatars;
      $('.sixth_item_block_wrapper .subitem_avatars > div:lt(' + c + ')').show();
      if (c == sixthBlockAvatars) {
        showSixththumbnailAvatars.hide();
      }
    });
    showSevenththumbnailAvatars.click(function () {
      d = (d + 3 <= seventhBlockAvatars) ? d + 3 : seventhBlockAvatars;
      $('.seventh_item_block_wrapper .subitem_avatars > div:lt(' + d + ')').show();
      if (d == seventhBlockAvatars) {
        showSevenththumbnailAvatars.hide();
      }
    });
    showEighththumbnailAvatars.click(function () {
      e = (e + 3 <= eighthBlockAvatars) ? e + 3 : eighthBlockAvatars;
      $('.eighth_item_block_wrapper .subitem_avatars > div:lt(' + e + ')').show();
      if (e == eighthBlockAvatars) {
        showEighththumbnailAvatars.hide();
      }
    });
    showNinththumbnailAvatars.click(function () {
      f = (f + 3 <= ninthBlockAvatars) ? f + 3 : ninthBlockAvatars;
      $('.ninth_item_block_wrapper .subitem_avatars > div:lt(' + f + ')').show();
      if (f == ninthBlockAvatars) {
        showNinththumbnailAvatars.hide();
      }
    });
    showTenththumbnailAvatars.click(function () {
      g = (g + 3 <= tenthBlockAvatars) ? g + 3 : tenthBlockAvatars;
      $('.tenth_item_block_wrapper .subitem_avatars > div:lt(' + g + ')').show();
      if (g == tenthBlockAvatars) {
        showTenththumbnailAvatars.hide();
      }
    });
  });
}

showMoreImgThumbnail();

/* Adding extra projects to the widget */

function addProjectsToWidget() {
  let addProjectBtn = $('#add_project');
  let eighthWidgetItem = $(".eighth_item_block_wrapper .container_item");
  let ninthWidgetItem = $(".ninth_item_block_wrapper .container_item");
  let tenthWidgetItem = $(".tenth_item_block_wrapper .container_item");
  let firstWidgetBtn = $(".entry_dropdown button span");

  addProjectBtn.click(function () {
    if (firstWidgetBtn.text() === 'Project_1') {
      eighthWidgetItem.show();
      eighthWidgetItem.addClass('displayFlex');
      $("html, body").animate({ scrollTop: $('#eighth_project').offset().top }, 1000);
    }
    else if (firstWidgetBtn.text() === 'Project_2') {
      ninthWidgetItem.show();
      ninthWidgetItem.addClass('displayFlex');
      $("html, body").animate({ scrollTop: $('#ninth_project').offset().top }, 1000);
    }
    else if (firstWidgetBtn.text() === 'Project_3') {
      tenthWidgetItem.show();
      tenthWidgetItem.addClass('displayFlex');
      $("html, body").animate({ scrollTop: $('#tenth_project').offset().top }, 1000);
    }
  });
}

addProjectsToWidget();
