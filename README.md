# Mini player

# Features
- PIP Mode, always op the top
  - Youtube
  - Twitch
  - Local video
- localize

# 하다가 중단
- player store 만들었고 Load 중에 에러핸들링 및 video id 추가하기 [ERROR]
- renderer 에서 현재 비디오 요청[LOADING] => main 에서 현재 비디오 보내기[LOADING] => renderer 에서 해당 비디오 바인딩 하고 해당 type 으로 redirect [IDLE]

# TODO on 07/06/2022
1. Draggable styles style 폴더로 옮기기.
2. Primary color tailwind 에 적용하기
3. window option type renderer 와 main 둘다 적용
