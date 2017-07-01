alert ("Hello, Dear User!")
const YES = "yes"
const correct1 = "1"
const correct2 = "2"
const correct3 = "3"
const correct4 = "4"
const correct5 = "5"
let result = prompt("Do you want to start?", "yes")
if (result == YES){
	let resultName = prompt("Your name?")
		console.log(resultName)
	let resultSecName = prompt("Your second name?")
		console.log(resultSecName)
	let resultAge = prompt("How old are you?")
		console.log(resultAge)
	let quest1 = prompt("Do you like this game?")
		console.log(quest1)
		if(quest1 == correct1){
			var res1 = 1*2**2
		}else{
			var res1 = 0
		}
		



	let quest2 = prompt("What part is your favourite?")
		console.log(quest2)
		if(quest2 == correct2){
			var res2 = 2*2**2
		}else{
			var res2 = 0
		}
	let quest3 = prompt("Do you know any other game like this?")
		console.log(quest3)
		if(quest3 == correct3){
			var res3 = 3*2**2
		}else{
			var res3 = 0
		}
	let quest4 = prompt("Do you want to pay for special content?")
		console.log(quest4)
		if(quest4 == correct4){
			var res4 = 4*2**2
		}else{
			var res4 = 0
		}
	let quest5 = prompt("Do you want to share with your friend?")
		console.log(quest5)
		if(quest5 == correct5){
			var res5 = 5*2**2
		}else{
			var res5 = 0
		}
	var sumRes = res1 + res2 + res3 + res4 + res5
	alert("your resulr is: "+ sumRes)

	}else{
		alert("end")
	}