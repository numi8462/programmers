function solution(friends, gifts) {
	let mostGift = 0;

	// 선물 지수 관리
	const giftScoreMap = new Map();
	// 각 친구의 선물 지수 맵 생성
	for(let friend of friends){
		giftScoreMap.set(friend, 0);
	}
	// 각 친구의 선물 지수 설정
	for(let i = 0; i < friends.length; i++){	
		let givenGifts = 0;
		let receivedGifts = 0;

		for(let gift of gifts){
			let giftFromTo = gift.split(' ');
			if(friends[i] === giftFromTo[0]){
				givenGifts++;
			}
			if(friends[i] === giftFromTo[1]){
				receivedGifts++;
			}
		}

		let giftScore = givenGifts - receivedGifts;
		giftScoreMap.set(friends[i], giftScore)
	}
	// 각 친구가 다음에 받을 선물 계산
	for(let i = 0; i < friends.length; i++){	
		const nextGiftMap = new Map();
		// 다른 친구한테 주고 받은 선물 계수 관리하는 맵 생성
		for(let friend of friends){
			nextGiftMap.set(friend, 0);
		}
		// 주고 받은 선물을 체크하면서 다음에 받을 선물 숫자 확인
		for(let gift of gifts){
			let giftFromTo = gift.split(' ');
			if(friends[i] === giftFromTo[0]){
				nextGiftMap.set(giftFromTo[1], nextGiftMap.get(giftFromTo[1]) + 1);
			}
			if(friends[i] === giftFromTo[1]){
				nextGiftMap.set(giftFromTo[0], nextGiftMap.get(giftFromTo[0]) - 1);
			}
		}

		// 다음에 받아야 할 선물 수
		let nextGiftCount = 0;
		// 맵에서 주고 받은 선물 바탕으로 다음에 받아야 할 선물 수 확인
		for(let friend of friends){
			// 내 자신은 스킵
			if(friends[i] === friend){
				continue;
			}
			// 만약에 내가 친구한테 선물을 더 많이 줬으면 +1, 같으면 지수 확인 후 +1
			if(nextGiftMap.get(friend) > 0){
				nextGiftCount++;
			} else if(nextGiftMap.get(friend) === 0 && giftScoreMap.get(friends[i]) > giftScoreMap.get(friend)){
				nextGiftCount++;
			}
		}

		if(nextGiftCount > mostGift){
			mostGift = nextGiftCount;
		}
	}



    var answer = mostGift;
    return answer;
}

const friends = ["a", "b", "c"];
const gifts = 	["a b", "b a", "c a", "a c", "a c", "c a"];

console.log("정답: " + solution(friends,gifts))