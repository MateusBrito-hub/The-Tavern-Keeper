export async function dices(faces:number) {
	const result : number = Math.floor(Math.random() * faces)
	return result
}

console.log(dices(20));