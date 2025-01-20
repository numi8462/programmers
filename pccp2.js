function solution(diffs, times, limit) {
    let right = Math.max(...diffs);
    let left = 1;
    
    while(left < right){
        let totalTime = 0;
        let mid = Math.floor((left + right) / 2);
        let level = mid;
        console.log('level: ' + level)
        for(let i = 0; i < diffs.length; i++){
            // if first question prevTime = 0;
            if(i === 0){
                prevTime = 0
            } else {
                prevTime = times[i - 1];
            }

            if(level >= diffs[i]){
                totalTime += times[i];
            } else {
                totalTime += (times[i] + prevTime) * (diffs[i] - level) + times[i];
            }

            // console.log('diff: ' + diffs[i])
            // console.log('prevTime: ' + prevTime)
            console.log('total: ' + totalTime)

            
            if(totalTime > limit){
                break;
            }
        }
        // 푸는 시간이 오버되면 level을 다시 설정
        if (totalTime > limit) {
            left = mid + 1;
        } else { // 푸는 시간이 넉넉하므로 최솟값을 찾기 위해 level최댓값을 다시 수정
            right = mid;
        }
    }

    return left;
}

diffs = [1, 5, 3];
times = [2, 4, 7];
limit = 30;

console.log(solution(diffs,times,limit));