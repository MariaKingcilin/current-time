let actual=new Date();
let time=actual.getHours();
if(6<=time&&time<=12)
{
	console.log("Morning");
}
else if(12<=time&&time<=18)
{
	console.log("Afternoon");
}
else
{
	console.log("Night");
}