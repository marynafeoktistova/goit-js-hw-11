import{a as c,S as n,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();function u(o){const s={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}};return c.get("https://pixabay.com/api/",s)}const m=document.querySelector(".gallery");function f(o){const s=o.map(e=>`
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
  `).join("");m.innerHTML=s,h.refresh()}const h=new n(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px",iconUrl:icon})}const g=document.querySelector(".search-form"),l=document.querySelector(".search-input");g.addEventListener("submit",y);function y(o){o.preventDefault();const s=l.value;if(!s)return;l.value="";const e=document.querySelector(".loader");e.style.display="block",setTimeout(()=>{e.style.display="none"},1e3),u(s).then(r=>b(r.data.hits)).catch(r=>console.log(r))}function b(o){o.length||p(),f(o)}
//# sourceMappingURL=index.js.map
