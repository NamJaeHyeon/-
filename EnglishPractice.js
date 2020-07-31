function correct(id,isCorrect){if(isCorrect)document.querySelector("#문번"+id+" .정답").innerText="정답!";else{document.querySelector("#문번"+id+" .정답").innerText="오답..."}}
var 본문 = document.querySelector("#본문").innerText.split("\n");
var 정답 = [];
for(var i=0; i<본문.length; i++){
	var 지문 = 본문[i].split(" ");
	var ran = Math.floor(Math.random()*지문.length);
	var 보여줄지문 = "";
	정답.push(지문[ran]);
	for(var j=0;j<지문.length;j++){if(j!=ran)보여줄지문+=" "+지문[j]; else 보여줄지문+=" (     ) "}
	document.querySelector("#문서내용").innerHTML+='<div id="문번'+i+'">'+"<div>"+(i+1)+". "+보여줄지문+'</div><input type="text" id='+"문제"+i+' onchange="correct('+i+',this.value=='+"'"+지문[ran]+"'"+')"><span class="정답" style="margin-left:10px;"></span></div>';
}
function checkAnswer(){for(var i=0;i<본문.length;i++){document.querySelector("#문번"+i+" .정답").innerText=정답[i];}}