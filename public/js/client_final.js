const button = document.querySelector('#search')
const gifInput = document.querySelector('#gif')
const trendingBtn = document.querySelector('#trends')
const instagif = document.querySelector('#joey')
const body = document.querySelector('#body')



API_key = 'Upu1PbcVEcikCbr4wFjRcrND4OeSfbIS'
filters = '&limit=7'
gifurl = 'https://api.giphy.com/v1/gifs/search?api_key=Upu1PbcVEcikCbr4wFjRcrND4OeSfbIS&q='


window.addEventListener('load', (e)=>{
    //e.preventDefault()
    loadIntro()
})

gifInput.addEventListener('keyup',(e)=>{
    //e.preventDefault()
    if ( (e.which==34)||(e.which==8)||(e.which <= 90 && e.which >= 48)){
    loadGifQuery()
    loadmusic()
    }
    
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
    random = ["joey","trump","justin beiber","macklemore","putin","tom cruise","chandler","monica","sacred games","the office","mark zuckerburg","facepalm","dab","bollywood","cute baby","the social network"]
    gifInput.value =  random[Math.floor(Math.random() * random.length)]
    loadGifQuery()
    loadmusic()
})

loadmusic = ()=>{
    var xhr = new XMLHttpRequest()
    var chars = gifInput.value
    xhr.open('GET','https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?lang=en,hi&limit=3&output=json&q='+chars)//https://cors-anywhere.herokuapp.com/
    xhr.onload = ()=>{
        var music = JSON.parse(xhr.responseText)
        var rand = getrandom(music.data)
        console.log(music)
        document.querySelector('#music').src = music.data[rand].preview
        
        // document.getElementById('music').muted = false
        // document.getElementById("music").play()
        
    }
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    // xhr.setRequestHeader('Access-Control-Allow-Headers','Content-Type')
    // xhr.setRequestHeader('Content-Type', 'json/application');
    xhr.send()
}

getrandom = (jsonfiledata)=>{
    return Math.floor(Math.random() * jsonfiledata.length)
}

loadIntro = ()=>{
    random = ["dostana","sholay","kabir singh","ariana","dil chahta hai","eminem","kal ho na ho","koi mil gaya","dilwale","mission impossible","hrithik roshan "]
    gifInput.value = random[Math.floor(Math.random() * random.length)];
    loadmusic()
    loadGifQuery()
}


