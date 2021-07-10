window.onload = function(){
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    let video = searchParams.get('video');

    document.getElementById('youtube').src = `https://www.youtube.com/embed/${video}`;
}