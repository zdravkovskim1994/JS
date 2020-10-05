function searchFun() {
    var input, filter, section, article, item, txtValue, i
    input = document.getElementById('input');
    filter = input.value.toUpperCase().trim();
    section = document.getElementById('section');
    article = section.getElementsByClassName('article');

    for (i = 0; i < article.length; i++) {
        item = article[i].getElementsByClassName('card')[0];
        txtValue = item.textContent || item.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = '';
        } else {
            article[i].style.display = 'none';
            // article[i].style.cssFloat = "left";
        }
    }

}