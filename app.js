function oscarTheLifetimeSupplier() {
	var age = prompt("How old are you?");
	var lifeTime = prompt("What do you think? How long will you live?");
	var snack = prompt("What is your favorite snack?");
	var weekly = prompt("Yummi! How many of those do you eat in a week?");
	var restTime = (lifeTime-age);
	var quantityOfSnack = (restTime*52);

alert("You need " + quantityOfSnack + " of " + snack + " at your " + lifeTime + "." );
}
oscarTheLifetimeSupplier();
