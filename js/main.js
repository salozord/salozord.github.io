
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
        }, 960);
    }
    setInterval(changePic, 5000);

    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
    });
};

let m = (window.innerWidth <= 800) ? 80 : 100;
let width = (window.innerWidth <= 800) ? (window.innerWidth - m*2) - 20 : (window.innerWidth - m*2)/3 - 20,
	height = Math.min(width, window.innerHeight - m*2 - 20);
let data = [[
      {axis:"Android",value:0.34},
      {axis:"Angular 8",value:0.7},
      {axis:"Java",value:0.95},
      {axis:"Python",value:0.65},
      {axis:"C",value:0.5},
      {axis:"Ionic",value:0.7},
      {axis:"SQL",value:0.93},
      {axis:"Software Architecture",value:0.7}
    ]];
let data2 = [[
    {axis:"Italian",value:0.68},
    {axis:"Spanish",value:0.95},
    {axis:"English",value:0.82}
    ]];
let color = d3.scale.ordinal().range(["#31C69A"]);
let color2 = d3.scale.ordinal().range(["#41748C"]);			
let radarChartOptions = {
    w: width,
    h: height,
    margin: {top: m, right: m, bottom: m, left: m},
    maxValue: 1.0,
    levels: 5,
    roundStrokes: true,
    color: color
};
let radarChartOptions2 = {
    w: width,
    h: height,
    margin: {top: m, right: m, bottom: m, left: m},
    maxValue: 1.0,
    levels: 5,
    roundStrokes: true,
    color: color2
};
//Call function to draw the Radar chart
RadarChart('.radarChart1', data, radarChartOptions);
RadarChart('.radarChart2', data2, radarChartOptions2);

function getAgent() {
    window.innerWidth
}