window.onload = function(){
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    document.getElementById('youtube').src = `https://www.youtube.com/embed/${searchParams.get('video')}`;
    document.title = searchParams.get('title');
}