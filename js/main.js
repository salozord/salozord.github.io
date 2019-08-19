
window.onload = () => {

    var path = './assets/img/';
    var images = ['op1.jpg', 'op2.jpg', 'op3.jpg'];
    
    var num = 1;
    function changePic() {
        let pic = document.getElementById('profile-pic');
        let newpic = document.createElement('img');
        newpic.src = path + images[num++];
        newpic.classList = pic.classList;
        newpic.id = pic.id;
        newpic.alt = pic.alt;
        
        if (num === 3) {
            num = 0;
        }
        //pic.classList.remove('fadingIn');
        pic.classList.add('fadingOut');
        let dad = pic.parentNode;
        setTimeout(()=> {
            dad.removeChild(pic);
            dad.prepend(newpic);
        },960);
    }
    setInterval(changePic, 5000);

   $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
    });
};