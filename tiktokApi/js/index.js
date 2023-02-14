const link = document.getElementById('link')
const submit = document.getElementById('submit')
const wmVideo = document.getElementById('wmv')
const nmVideo = document.getElementById('nmv')
const srcVideo = document.getElementById('srcVideo')
const video = document.getElementById('video')
const section = document.getElementById('media')

// make fetch top API and wait promisses to preceed
const getVideo = () => {
    //https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${link.value}
    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${link.value}`
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8c8b69cd03mshb9051f368c91c12p1725d2jsnd710d57e417c',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    }

    
    fetch(url, options)
	    .then(res => res.json())
        .then(json => { Cookies.set('url', json.data.play) && Cookies.set('urlWm', json.data.wmplay) && renderize(json) })
	    .catch(err => console.error('error:' + err));
}

function redirection(href) { 
    setTimeout(() => window.location.href='../pages/download.html', 1000)
    getVideo()
}

function renderize(obj) {
    const toggleTypeVideo = (id, data) => {id?.setAttribute('src', data.play), console.log(id)}
    wmVideo?.addEventListener('click', (() => toggleTypeVideo(srcVideo, obj.data.wmplay)))
    nmVideo?.addEventListener('click', (() => toggleTypeVideo(srcVideo, obj.data.play)))
}
    
    


// const obj = {
//     "code": 0,
//     "msg": "success",
//     "processed_time": 0.1608,
//     "data": {
//          "aweme_id": "v09044g40000ceu3ogrc77u65jevkqt0",
//          "id": "7186685593399708933",
//          "region": "BR",
//          "title": "#felipe_fatos #curiosidades #emocoes #FACTOS😮📸 #interesante #temperatura  #clima #corpohumano #sentimientos #fax ",
//          "cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ce911bbc718b4c298796bc4beb73595b_1673280640?x-expires=1674540000&x-signature=oIbVehJY0jUZLX2FAYfT0bg%2FP40%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=202301230631032E0CF353C1DCDB5B462A",
//          "origin_cover": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/de3840986e0747c38c6f54ab67fe95ac_1673280640~tplv-tiktokx-360p.image?x-expires=1674540000&x-signature=CLBRO1tHD5iNdxvILxmYB2gLkYY%3D&s=AWEME_DETAIL&se=false&sh=&sc=feed_cover&l=202301230631032E0CF353C1DCDB5B462A",
//          "duration": 11,
//          "play": "https://v16m-default.akamaized.net/06ec6a5ca54cd12dc693ed0cdbfe65d9/63ce7e13/video/tos/useast2a/tos-useast2a-ve-0068c003/oQcihkoZGPAQeuGgIH4xFGO17RpArEGeQf2ewH/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1170&bt=585&cs=0&ds=6&ft=XE5bCqT0m7jPD12IIuJq3wUUHvyKMeF~OD&mime_type=video_mp4&qs=0&rc=aWZoOTs3NDk1OGVpNGQ8ZkBpM3R5bTk6Zmo2aDMzNzczM0BfX2A0Y2MvNl8xL2IvM19eYSNxaGIycjRvbHJgLS1kMTZzcw%3D%3D&l=202301230631032E0CF353C1DCDB5B462A&btag=80000",
//          "wmplay": "https://v16m-default.akamaized.net/a1fd2625d7bb9d42c5c59c92c1844194/63ce7e13/video/tos/useast2a/tos-useast2a-ve-0068c004/oYhBUkythtaI3oCIhW3xLQf46I6zN6ogA6GQ8A/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1192&bt=596&cs=0&ds=3&ft=XE5bCqT0m7jPD12IIuJq3wUUHvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OzRlPDc3N2Y2PGhpPGQ4ZEBpM3R5bTk6Zmo2aDMzNzczM0AwYy4xYmBjNTUxLzBgL2MzYSNxaGIycjRvbHJgLS1kMTZzcw%3D%3D&l=202301230631032E0CF353C1DCDB5B462A&btag=80000",
//          "size": 869923,
//          "wm_size": 1194220,
//          "music": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7186685611670997765.mp3",
//          "music_info": {
//              "id": "7186685610160032518",
//              "title": "original sound - felipe_.fatos",
//              "play": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7186685611670997765.mp3",
//              "cover": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6d887658ed384b7d90112941fc3071e3~c5_1080x1080.jpeg?x-expires=1674540000&x-signature=IyhfTzOxt6E1VH90zAKt0W4wXcY%3D",
//              "author": "🪐🌌🌟Felipe fatos🌟🌌🪐",
//              "original": true,
//              "duration": 11,
//              "album": ""
//             },
//             "play_count": 1505533,
//             "digg_count": 222508,
//             "comment_count": 4348,
//             "share_count": 1455,
//             "download_count": 9833,
//             "create_time": 1673280639,
//             "author": {
//                 "id": "6975706032086254597",
//                 "unique_id": "felipe_.fatos",
//                 "nickname": "🪐🌌🌟Felipe fatos🌟🌌🪐",
//                 "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6d887658ed384b7d90112941fc3071e3~c5_300x300.jpeg?x-expires=1674540000&x-signature=Ap%2B%2Fgfnb7kS0ej9t4uK3kb%2FNg7Y%3D"
//             }
//      }
//  }
 

submit?.addEventListener('click', () => redirection())