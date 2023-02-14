const mediaSection = document.getElementById('media')
const Url = Cookies.get('url')
console.log(Url)
mediaSection.innerHTML = `<video controls allowfullscreen loop src="${Url}"></video>` 

const toggleTypeVideo = (id, data) => {id?.setAttribute('download', data.data.play), console.log(id)}
    wmVideo?.addEventListener('click', (() => toggleTypeVideo('´´l', obj.data.wmplay)))
    nmVideo?.addEventListener('click', (() => toggleTypeVideo(srcVideo, obj.data.play)))