import{a as d,S as u,i as m}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function f(r){const t={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return d.get("https://pixabay.com/api/",t)}const n=document.querySelector(".gallery");function h(r){if(n.innerHTML="",r.length===0){l();return}const t=r.map(a=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a.largeImageURL}">
        <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${a.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${a.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${a.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${a.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `).join("");n.innerHTML=t,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function l(){m.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px"})}const g=document.querySelector(".search-form"),c=document.querySelector(".search-input");g.addEventListener("submit",p);function p(r){r.preventDefault();const t=c.value.trim();if(!t)return;c.value="";const o=document.querySelector(".loader");o.style.display="block";const a=document.querySelector(".gallery");a.innerHTML="",f(t).then(e=>y(e.data.hits)).catch(e=>{console.error(e),l()}).finally(()=>{o.style.display="none"})}function y(r){if(!r.length){l();const t=document.querySelector(".gallery");t.innerHTML="";return}h(r)}
//# sourceMappingURL=index.js.map
