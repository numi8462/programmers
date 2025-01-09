function solution(bandage, health, attacks) {
	let t = bandage[0]; // skill time
	let x = bandage[1]; // health
	let y = bandage[2]; // bonus health
	let curHealth = health;
	let totalTime = attacks[attacks.length - 1][0];

	// keep track of attack count
	let attackCount = 0;
	// keep track of continued heal time
	let healTime = 0;

	for(let i = 1; i <= totalTime; i++){

		if(i == attacks[attackCount][0]){
			curHealth -= attacks[attackCount][1];
			if(curHealth <= 0){
				return -1;
			}
			attackCount += 1;
			healTime = 0;
			console.log(i + ": "+ healTime + ", " +curHealth);
			continue;
		}
		
		healTime += 1;

		if(healTime == t){
			curHealth += x + y;
			healTime = 0;
		} else {
			curHealth += x;
		}

		if(curHealth > health){
			curHealth = health;
		}
		console.log(i + ": "+ healTime + ", " +curHealth);

	}

    var answer = curHealth;
    return answer;
}

let bandage = [1, 1, 1]; // [시전 시간, 초당 회복량, 추가 회복량]
let health = 5;
let attacks = [[1, 2], [3, 2]]; // 각각[공격 시간, 피해량]

console.log(solution(bandage,health,attacks));