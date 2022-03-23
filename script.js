var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://thumbs.dreamstime.com/z/dad-icon-cartoon-style-dad-icon-cartoon-style-white-background-123080092.jpg", "https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171207137/91230755-young-girl-kid-character-standing-cartoon-vector-illustration.jpg", "https://png.pngtree.com/png-clipart/20220111/original/pngtree-family-portrait-png-image_7086887.png"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
