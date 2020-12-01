// const canvas = document.querySelector("#myCanvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(1, 1);
// ctx.lineTo(5, 80);
// ctx.stroke();
function buatGetaran(pola) {
	var getaran = this.navigator.vibrate(pola);

	// tampilkan hasilnya ke console
	// kalau true berarti browser mendukung untuk membuat getaran
	// tapi kalau false browser tidak mendukung
	console.log(getaran);
}
