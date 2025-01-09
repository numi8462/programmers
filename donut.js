function solution(edges) {
    const map = {}

		// for loop를 사용해 각 노드의 객체를 만들어 들어 오는 선과 나가는 선의 개수를 저장한다
		// 예시 { 1 : [1,2] } --> 1노드는 1개의 들어오는 선과 2개의 나가는 선이 있다. 
    for (const [start, end] of edges) {
        map[start] = map[start] ?? [0, 0]
        map[end] = map[end] ?? [0, 0]
        map[start][0]++
        map[end][1]++
    }

    let addedNode = 0 // 모든 모양과 연결된 노드
    let donutCnt = 0
    let lineCnt = 0
    let eightCnt = 0
    for (const [start, [given, received]] of Object.entries(map)) {
        if (given > 1 && received === 0) {
            addedNode = start
        } else if (given === 0) {
            lineCnt++
        } else if (given > 1 && received > 1) {
            eightCnt++
        }
    }

    donutCnt = map[addedNode][0] - lineCnt - eightCnt

    return [Number(addedNode), donutCnt, lineCnt, eightCnt]
}