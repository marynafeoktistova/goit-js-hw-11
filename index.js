import{a as u,S as m,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();function h(r){const s={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get("https://pixabay.com/api/",s)}const l=document.querySelector(".gallery");function f(r){if(l.innerHTML="",r.length===0){c();return}const s=r.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${e.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${e.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${e.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${e.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `).join("");l.innerHTML=s,new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function c(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px"})}const p=document.querySelector(".search-form"),n=document.querySelector(".search-input");p.addEventListener("submit",g);function g(r){r.preventDefault();let s=n.value.trim();if(!s)return;n.value="",document.querySelector(".gallery").innerHTML="";const o=document.querySelector(".loader");o.style.display="block",h(s).then(e=>{o.style.display="none",e.data.hits.length===0?c():y(e.data.hits)}).catch(e=>{o.style.display="none",d.error({title:"Error",message:"Opss..."}),console.error("Error details:",e)})}function y(r){f(r)}
//# sourceMappingURL=index.js.map
