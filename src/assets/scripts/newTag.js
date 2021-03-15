function head_link(href) {
    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    document.head.appendChild(link)
}

function del_link(href) {
    let el = document.querySelector("link[href='" + href + "']");
    if(el){ el.remove(); }
}

export {
    head_link,
    del_link,
}