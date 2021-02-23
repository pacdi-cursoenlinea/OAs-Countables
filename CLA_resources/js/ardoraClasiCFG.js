//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=5;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="START";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#DADC81"; colorButton="#739234"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="WELL DONE"; messageTime="2 MINUTES"; messageError="READ AGAIN THE EXPLANATION!"; messageErrorG="READ AGAIN THE EXPLANATION!"; messageAttempts="READ AGAIN THE EXPLANATION!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["T0lM","U1VHQVI","WlVDQ0hJTkk","QkFOQU5B","Q09PS0lF","QlJPQ0NPTEk","Q09GRkVF"];
var img_G=["aceite.jpg","AZUCAR.jpg","calabacitas.jpg","banana.jpg","galletas.jpg","broccoli.jpg","cafe.jpg"];
var mp3_G=["","","","","","",""];
var ogg_G=["","","","","","",""];
var n_G=["Mg","Mg","MQ","MQ","MQ","Mg","Mg"];
var e_G=["WRONG","WRONG","WRONG","WRONG","WRONG","WRONG","WRONG"];
var mp4_G=["","","","","","",""];
var ogv_G=["","","","","","",""];
var txtGr=["COUNTABLE","UNCOUNTABLE"];
var imgGr=["",""];
var mp3Gr=["",""];
var oggGr=["",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="READ AGAIN THE EXPLANATION!";
var dirMedia="CLA_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Q0xB"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
