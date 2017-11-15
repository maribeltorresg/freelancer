window.addEventListener('load', function() {
  var popup = document.getElementById('popup');
  var box = document.getElementsByClassName('box')[0];
  // console.log(box);
  box.addEventListener('click', function() {
    var title = box.dataset.title;
    var popupTitle = document.getElementById('popup-title');
    popupTitle.textContent = title;

    var img = box.dataset.img;
    var popupImg = document.getElementById('popup-img');
    popupImg.src = img;

    var description = box.dataset.description;
    var popupDescription = document.getElementById('popup-description');
    popupDescription.innerHTML = description;
    
    
    popup.style.zIndex = 1001;
    popup.className = 'active';
    
  })

});