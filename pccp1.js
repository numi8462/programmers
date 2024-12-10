function solution(video_len, pos, op_start, op_end, commands) {
    const [min, sec] = video_len.split(":").map(Number)
    const video_len_sec = min * 60 + sec
    
    const [p_min, p_sec] = pos.split(":").map(Number)
    let pos_sec = p_min * 60 + p_sec
    
    const [s_min, s_sec] = op_start.split(":").map(Number)
    const op_start_sec = s_min * 60 + s_sec
    
    const [e_min, e_sec] = op_end.split(":").map(Number)
    const op_end_sec = e_min * 60 + e_sec
    
    if(pos_sec >= op_start_sec && pos_sec <= op_end_sec){
		pos_sec = op_end_sec
	}
        
    for(const command of commands){     
        if(command === "next"){
            pos_sec += 10
        } else {
            pos_sec -= 10
        }
        
        if(pos_sec < 0){
            pos_sec = 0
        }

		if(pos_sec >= op_start_sec && pos_sec <= op_end_sec){
			pos_sec = op_end_sec
		}

		if(pos_sec > video_len_sec){
			pos_sec = video_len_sec
		}

    }
        
	pos_time_minute = String(Math.floor(pos_sec / 60)).padStart(2,'0');
	pos_time_seconds = String(pos_sec % 60).padStart(2, '0');
	
    
	pos_time = pos_time_minute + ":" + pos_time_seconds;

    var answer = pos_time;
    return answer;
}

console.log(solution("10:55","00:05","00:15","06:55",["prev", "next", "next"]));