console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submit successful!");

}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let rubberDucky= document.querySelector('img');
rubberDucky.addEventListener('mouseover', () => {
	alert ('You have amazing taste!');
}
)