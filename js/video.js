window.onload = function(){
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    let youTube = document.getElementById('youtube');
    let title =  searchParams.get('title');
    
    youTube.src = `https://www.youtube.com/embed/${searchParams.get('video')}`;
    youTube.title = title;
    document.title = title;
}