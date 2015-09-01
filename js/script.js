
function show_hidden_menu() {
  var menu = document.getElementById('hidden_menu');
  var search_mob = document.getElementById('search_div');
  var search = document.getElementById('search');
  if(menu.style.display == "none")
  {
    if(search_mob.style.display == "block")
    {
      search_mob.style.display = "none";
    }
    menu.style.display = "block";
    document.getElementById('menu_button').innerHTML = "X";
    search.innerHTML = "<img src=\"img/search_icon.svg\" alt=\"\" width=\"28px\" height=\"28px\" />";
  }
  else {
    menu.style.display = "none";
    document.getElementById('menu_button').innerHTML = "MENU";
  }
}

function show_search() {
    var search_mob = document.getElementById('search_div');
    var menu = document.getElementById('hidden_menu');
    var search = document.getElementById('search');
    if(search_mob.style.display == "none")
    {
    if(menu.style.display == "block")
    {
      menu.style.display = "none";
      document.getElementById('menu_button').innerHTML = "MENU";
    }
    search_mob.style.display = "block";
    search.innerHTML = "X";
    }
    else {
    search_mob.style.display = "none";
    search.innerHTML = "<img src=\"img/search_icon.svg\" alt=\"\" width=\"28px\" height=\"28px\" />";
    }
}
