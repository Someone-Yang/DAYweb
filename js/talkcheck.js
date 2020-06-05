function starttalk() {
	document.getElementById("checkbtn").style.display="none";
    var gitalk = new Gitalk({
          clientID: '59a7c18671433d2f0164',
          clientSecret: '7ba89f8b00259c7bfa43fc92695de4e9c8c57814',
          repo: 'DAYdiscuss',
          owner: 'Someone-Yang',
          admin: ['CHRiceRice', 'Someone-Yang'],
          id: location.pathname,      // Ensure uniqueness and length less than 50
          distractionFreeMode: false  // Facebook-like distraction free mode
        });
    gitalk.render('gitalk-container');
};
function startcheck() {
		    var dataList = ["0","1"];
        var options = {
            dataList: dataList,
            success: function(){
            	starttalk();  
            },
            fail: function(){
                console.log("fail");  
            }
        };
        SliderBar("checkdiv", options)
};
function sleep(numberMillis) {  var now = new Date();  var exitTime = now.getTime() + numberMillis;  while (true) {  now = new Date();  if (now.getTime() > exitTime)  return;  }  }