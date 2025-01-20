function solution(diffs, times, limit) {
	// 이진탐색
    let left = 1;
    let right = 100000;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let totalTime = 0;
        let currLvl = mid;

        for (let i = 0; i < diffs.length; i++) {
            if (currLvl >= diffs[i]) {
                totalTime += times[i];
            } else {
                let wrongAmount = diffs[i] - currLvl;
                let prevTime = i === 0 ? times[i] : times[i - 1] + times[i];
                totalTime += wrongAmount * prevTime + times[i];
            }

            if (totalTime > limit) {
                break;
            }
        }

        if (totalTime > limit) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
