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
    
    


// res -> {
//     "code": number,
//     "msg": "",
//     "processed_time": number,
//     "data": {
//          "aweme_id": "",
//          "id": "",
//          "region": "",
//          "title": "",
//          "cover": url,
//          "origin_cover": url,
//          "duration": number,
//          "play": url,
//          "wmplay": url,
//          "size": number,
//          "wm_size": number,
//          "music": url,
//          "music_info": {
//              "id": "",
//              "title": "",
//              "play": url,
//              "cover": url,
//              "author": "",
//              "original": boolean,
//              "duration": number,
//              "album": ""
//             },
//             "play_count": number,
//             "digg_count": number,
//             "comment_count": number,
//             "share_count": number,
//             "download_count": number,
//             "create_time": number,
//             "author": {
//                 "id": "",
//                 "unique_id": "",
//                 "nickname": "",
//                 "avatar": ""
//             }
//      }
//  }
 

submit?.addEventListener('click', () => redirection())
