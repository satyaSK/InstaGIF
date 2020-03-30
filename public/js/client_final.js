const button = document.querySelector('#search')
const gifInput = document.querySelector('#gif')
const trendingBtn = document.querySelector('#trends')
const instagif = document.querySelector('#joey')
const body = document.querySelector('#body')

API_key = 'Upu1PbcVEcikCbr4wFjRcrND4OeSfbIS'
filters = '&limit=7'
gifurl = 'https://api.giphy.com/v1/gifs/search?api_key=Upu1PbcVEcikCbr4wFjRcrND4OeSfbIS&q='


gifInput.addEventListener('keyup',(e)=>{
    //e.preventDefault()
    loadGifQuery()
})

loadGifQuery = ()=>{
    var chars = gifInput.value
    var mygiphy = new XMLHttpRequest()
    mygiphy.open('GET',gifurl+chars+filters)
    mygiphy.onload = ()=>{
        //console.log(JSON.parse(mygiphy.responseText))
        const payload = JSON.parse(mygiphy.responseText)
        document.querySelector('#title').innerHTML = payload.data[0].title.replace("GIF","").toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
        document.querySelector('#gifholder_link').href = payload.data[0].images.downsized_medium.url
        document.querySelector('#gifholder').src = payload.data[0].images.downsized_medium.url
        createHTML(payload.data)
    }
    mygiphy.send()
}

createHTML = (a)=>{
    //console.log("crazyy")
    for(var i=1; i<a.length;i++){
        var s = i.toString(10)
        document.querySelector('#gifholder'+s+'_link').href = a[i].images.original.url
        document.querySelector('#gifholder'+s).src = a[i].images.original.url
    }
}


instagif.addEventListener('click',(e)=>{
    e.preventDefault()
    random = ["joey","trump","coronavirus","putin","tom cruise","chandler","monica","sacred games","the office","mark zuckerburg","facepalm","dab","bollywood","cute baby"]
    gifInput.value =  random[Math.floor(Math.random() * random.length)];
    loadGifQuery()
})

// window.addEventListener('load',(e)=>{
//     e.preventDefault()
//     random = ["joey","trump","coronavirus","putin","tom cruise","chandler","monica","sacred games","the office","mark zuckerburg","facepalm","dab","bollywood","cute baby"]
//     gifInput.value =  random[Math.floor(Math.random() * random.length)];
//     loadGifQuery()
// })