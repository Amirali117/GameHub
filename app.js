(() => {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const games = [
    {
      id:"gta-v", name:"Grand Theft Auto V", vipRequired:true, hero:"GRAND<br><span>THEFT AUTO V</span>",
      genre:"OPEN WORLD", category:"ACTION · OPEN WORLD",
      description:"Explore Los Santos, take on high-stakes missions, and discover a vast open world.",
      image:"assets/gta-v.jpg", backdrop:"assets/gta-v.jpg",
      tags:["OPEN WORLD","ACTION","ONLINE SESSION"],
      launchUrl:"https://t.co/8r990RLwpe"
    },
    {
      id:"black-ops", name:"Call of Duty: Black Ops", hero:"CALL OF DUTY<br><span>BLACK OPS</span>",
      genre:"FIRST-PERSON SHOOTER", category:"FPS · TACTICAL",
      description:"Enter a covert world of espionage, cinematic missions, and intense combat.",
      image:"assets/black-ops-1.jpg", backdrop:"assets/black-ops-1.jpg",
      tags:["FPS","TACTICAL","READY TO PLAY"],
      launchUrl:"https://vel.gg/bo1z"
    },
    {
      id:"quake-1", name:"Quake 1", hero:"QUAKE<br><span>THE ORIGINAL</span>",
      genre:"FIRST-PERSON SHOOTER", category:"FPS · CLASSIC",
      description:"Fight through dark dimensions in the legendary fast-paced first-person shooter.",
      image:"assets/quake-1.jpg", backdrop:"assets/quake-1.jpg",
      tags:["FPS","CLASSIC","READY TO PLAY"], launchUrl:"https://t.co/qXBkATp72T"
    },
    {
      id:"diablo", name:"Diablo", hero:"DIABLO<br><span>DESCEND INTO DARKNESS</span>",
      genre:"ACTION RPG", category:"RPG · DARK FANTASY",
      description:"Descend into the depths beneath Tristram in a dark fantasy action RPG.",
      image:"assets/diablo.webp", backdrop:"assets/diablo.webp",
      tags:["ACTION RPG","DARK FANTASY","READY TO PLAY"], launchUrl:"https://t.co/v57MPTAQvI"
    },
    {
      id:"modern-warfare-2", name:"Call of Duty: Modern Warfare 2", vipRequired:true, hero:"CALL OF DUTY<br><span>MODERN WARFARE 2</span>",
      genre:"FIRST-PERSON SHOOTER", category:"FPS · ACTION",
      description:"Take on intense missions in this cinematic Call of Duty action experience.",
      image:"assets/modern-warfare-2.jpg", backdrop:"assets/modern-warfare-2.jpg",
      tags:["FPS","ACTION","READY TO PLAY"], launchUrl:"https://ovz-game-production.up.railway.app"
    },
    {
      id:"simpsons-hit-and-run", name:"The Simpsons: Hit & Run", hero:"THE SIMPSONS<br><span>HIT & RUN</span>",
      genre:"ACTION · ADVENTURE", category:"OPEN WORLD · COMEDY",
      description:"Explore Springfield in a comic open-world adventure starring the Simpsons.",
      image:"assets/simpsons-hit-and-run.jpeg", backdrop:"assets/simpsons-hit-and-run.jpeg",
      tags:["ADVENTURE","OPEN WORLD","READY TO PLAY"], launchUrl:"https://t.co/vQMmzEfWXh"
    },
    {
      id:"minecraft", name:"Minecraft", hero:"MINECRAFT<br><span>BUILD YOUR WORLD</span>",
      genre:"SANDBOX · SURVIVAL", category:"SANDBOX · ADVENTURE",
      description:"Mine, craft, explore, and build your own world in the classic Minecraft experience.",
      image:"assets/mincraft.jpg", backdrop:"assets/mincraft.jpg",
      tags:["SANDBOX","SURVIVAL","READY TO PLAY"], launchUrl:"https://classic.minecraft.net"
    },
    {
      id:"minecraft-online", name:"Minecraft Online", vipRequired:true, hero:"MINECRAFT<br><span>ONLINE WORLDS</span>",
      genre:"SANDBOX · SURVIVAL", category:"SANDBOX · ADVENTURE",
      description:"Build, explore, and survive together in a block-based online world.",
      image:"assets/minecraft-online.jpg", backdrop:"assets/minecraft-online.jpg",
      tags:["SANDBOX","SURVIVAL","READY TO PLAY"], launchUrl:"https://minecraftweb.pages.dev"
    }
  ];
  const translations = {
    en:{
      mobileNotice:"For the best cloud gaming experience, open GAME HUB on a desktop device.",musicTitle:"YOUR GAME. YOUR SOUNDTRACK.",musicSubtitle:"Enjoy your favorite music while gaming.",musicQueue:"Curated playlist · plays one by one",donate:"Donate",aboutGuide:"About & Guide",downloadLauncher:"Download Launcher",betaVersion:"BETA v2.0",brandTag:"CLOUD GAMING",discover:"Discover",library:"Game Library",howItWorks:"How it works",profile:"Profile",platformStatus:"PLATFORM STATUS",demoStatus:"WEB LAUNCHER PREVIEW",homeLabel:"HOME",cloudGaming:"CLOUD GAMING",browserReady:"BROWSER PLAY",guest:"Guest",featuredExperience:"FEATURED EXPERIENCE",cloudReady:"CLOUD READY",playWithoutLimits:"PLAY WITHOUT LIMITS",playNow:"PLAY NOW",gameDetails:"GAME DETAILS",launchNote:"Cloud play opens in your browser when a game session is configured.",curatedCollection:"CURATED COLLECTION",popularGames:"Popular games",simpleFast:"SIMPLE. FAST. IN YOUR BROWSER.",gamingReimagined:"Gaming, reimagined.",howDescription:"Choose a supported title, connect to its cloud session, and play without a traditional installation.",stepOneTitle:"Choose a game",stepOneText:"Explore the games selected by the GAME HUB team.",stepTwoTitle:"Connect to cloud",stepTwoText:"Open the supported game session from your browser.",stepThreeTitle:"Jump into play",stepThreeText:"Your gameplay is streamed from a remote gaming machine.",playerArea:"PLAYER AREA",guestProfile:"Guest profile",profileDescription:"Your account, cloud saves, and play history will appear here when accounts are enabled.",comingSoon:"COMING SOON",footerLine:"CLOUD GAMING, BUILT FOR PLAY.",available:"READY TO PLAY",vipRequired:"VIP REQUIRED",vipLocked:"Unlock VIP to play this title.",selectGame:"SELECT GAME",gamesCount:"{n} GAMES",detailsUnavailable:"A cloud session has not been connected to this title yet.",openSession:"Open cloud session",close:"CLOSE",previous:"Previous game",next:"Next game"
    },
    fa:{
      mobileNotice:"برای بهترین تجربه بازی ابری، GAME HUB را روی کامپیوتر باز کنید.",musicTitle:"بازی تو، موسیقی تو",musicSubtitle:"هنگام بازی به موسیقی موردعلاقه‌ات گوش بده.",musicQueue:"فهرست موسیقی · پخش پشت سر هم",donate:"دونیت",aboutGuide:"درباره و راهنما",downloadLauncher:"دانلود لانچر",betaVersion:"نسخه بتا ۲.۰",brandTag:"بازی ابری",discover:"کشف بازی‌ها",library:"کتابخانه بازی",howItWorks:"نحوه کار",profile:"پروفایل",platformStatus:"وضعیت پلتفرم",demoStatus:"پیش‌نمایش لانچر وب",homeLabel:"خانه",cloudGaming:"بازی ابری",browserReady:"بازی در مرورگر",guest:"مهمان",featuredExperience:"تجربه منتخب",cloudReady:"آماده اتصال ابری",playWithoutLimits:"بدون محدودیت بازی کن",playNow:"اجرای بازی",gameDetails:"جزئیات بازی",launchNote:"با اتصال سرور بازی ابری، بازی از داخل مرورگر اجرا خواهد شد.",curatedCollection:"مجموعه منتخب",popularGames:"بازی‌های محبوب",simpleFast:"ساده، سریع و داخل مرورگر",gamingReimagined:"تجربه‌ای تازه از بازی.",howDescription:"یک بازی را انتخاب کن، به نشست ابری آن متصل شو و بدون نصب سنتی بازی کن.",stepOneTitle:"انتخاب بازی",stepOneText:"بازی‌های انتخاب‌شده توسط تیم GAME HUB را ببین.",stepTwoTitle:"اتصال به فضای ابری",stepTwoText:"نشست بازی پشتیبانی‌شده را از مرورگر باز کن.",stepThreeTitle:"شروع بازی",stepThreeText:"تصویر بازی از یک سیستم گیمینگ راه دور برایت پخش می‌شود.",playerArea:"بخش بازیکن",guestProfile:"پروفایل مهمان",profileDescription:"پس از فعال‌شدن حساب‌های کاربری، اطلاعات حساب، ذخیره ابری و سابقه بازی اینجا نمایش داده می‌شود.",comingSoon:"به‌زودی",footerLine:"بازی ابری، برای تجربه بازی.",available:"آماده بازی کردن",vipRequired:"نیازمند VIP",vipLocked:"برای اجرای این بازی، VIP را فعال کنید.",selectGame:"انتخاب بازی",gamesCount:"{n} بازی",detailsUnavailable:"هنوز نشست بازی ابری برای این عنوان متصل نشده است.",openSession:"باز کردن نشست ابری",close:"بستن",previous:"بازی قبلی",next:"بازی بعدی"
    }
  };
  let language = "en";
  let selectedIndex = 0;
  const donationUrl = "https://daramet.com/GamehubCloud";
  const safeUrl = (value) => {
    try { const u = new URL(value, location.href); return ["http:","https:"].includes(u.protocol) ? u.href : ""; }
    catch (_) { return ""; }
  };
  function t(key){ return translations[language][key] || translations.en[key] || key; }
  function setText(el, value){ if(el) el.textContent=value; }
  function updateStaticText(){
    document.documentElement.lang=language;
    document.documentElement.dir=language==="fa"?"rtl":"ltr";
    document.body.classList.toggle("persian",language==="fa");
    document.querySelectorAll("[data-i18n]").forEach(el=>setText(el,t(el.dataset.i18n)));
    $("#languageToggle").textContent=language==="en"?"فارسی":"English";
    $("#prevGame").setAttribute("aria-label",t("previous"));
    $("#nextGame").setAttribute("aria-label",t("next"));
    $("#year").textContent=new Date().getFullYear();
  }
  function renderHero(){
    const g=games[selectedIndex];
    $("#heroTitle").innerHTML=g.hero;
    setText($("#heroDescription"),g.description);
    $("#heroImage").style.backgroundImage=g.backdrop.startsWith("linear-gradient")?g.backdrop:`url("${g.backdrop}")`;
    const tags=$("#heroTags"); tags.replaceChildren();
    g.tags.forEach(tag=>{const s=document.createElement("span");s.textContent=tag;tags.append(s);});
    $("#heroIndex").textContent=String(selectedIndex+1).padStart(2,"0");
    $("#heroTotal").textContent=String(games.length).padStart(2,"0");
    const launch=$("#launchButton");
    const url=safeUrl(g.launchUrl);
    const isVip=localStorage.getItem("gamehub_vip_active")==="true";
    const vipLocked=!!g.vipRequired&&!isVip;
    const playable=!g.comingSoon&&!vipLocked;
    launch.href=playable?(url||"#"):"#";
    launch.dataset.connected=url?"true":"false";
    launch.classList.toggle("coming-soon-play",!playable);
    const playLabel=vipLocked?t("vipRequired"):(playable?t("playNow"):t("comingSoon"));
    launch.querySelector('[data-i18n="playNow"]').textContent=playLabel;
    launch.setAttribute("aria-label",playLabel+" — "+g.name);
    launch.onclick=(e)=>{
      if(vipLocked){e.preventDefault();location.href="vip.html";return;}
      if(!playable){e.preventDefault();return;}
      if(!url){e.preventDefault();alert(t("detailsUnavailable"));return;}
    };
    $("#dialogTitle").textContent=g.name;
    $("#dialogDescription").textContent=g.description;
    const meta=$("#dialogMeta");meta.replaceChildren();
    [g.genre,g.category,vipLocked?t("vipRequired"):(g.comingSoon?t("comingSoon"):t("available"))].forEach(value=>{const span=document.createElement("span");span.textContent=value;meta.append(span);});
    $("#dialogLaunch").href=playable?(url||"#"):"#";
    $("#dialogLaunch").querySelector('[data-i18n="playNow"]').textContent=playLabel;
    $("#dialogLaunch").classList.toggle("coming-soon-play",!playable);
    $("#dialogLaunch").onclick=(e)=>{if(vipLocked){e.preventDefault();location.href="vip.html";return;}if(!playable){e.preventDefault();return;}if(!url){e.preventDefault();alert(t("detailsUnavailable"));}};
  }
  function renderCards(){
    const grid=$("#gameGrid");grid.replaceChildren();
    games.forEach((g,i)=>{
      const card=document.createElement("article");
      card.className="game-card"+(i===selectedIndex?" selected":"");
      card.tabIndex=0;card.setAttribute("role","button");card.setAttribute("aria-pressed",String(i===selectedIndex));
      const art=document.createElement("div");art.className="game-card-art";art.style.backgroundImage=g.backdrop.startsWith("linear-gradient")?g.backdrop:`url("${g.backdrop}")`;
      const shade=document.createElement("div");shade.className="game-card-shade";
      const content=document.createElement("div");content.className="game-card-content";
      const top=document.createElement("div");top.className="game-card-top";
      const category=document.createElement("span");category.textContent=g.category;
      const status=document.createElement("span");status.className="available";const cardVipLocked=!!g.vipRequired&&localStorage.getItem("gamehub_vip_active")!=="true";status.textContent=cardVipLocked?t("vipRequired"):(g.comingSoon?t("comingSoon"):t("available"));if(cardVipLocked)status.classList.add("vip-locked");
      top.append(category,status);
      const title=document.createElement("h3");title.textContent=g.name;
      const desc=document.createElement("p");desc.textContent=g.description;
      const bottom=document.createElement("div");bottom.className="game-card-bottom";
      const genre=document.createElement("small");genre.textContent=g.genre;
      const choose=document.createElement("span");choose.className="card-play";choose.append(document.createTextNode((cardVipLocked?t("vipRequired"):(g.comingSoon?t("comingSoon"):t("selectGame")))+" "),Object.assign(document.createElement("b"),{textContent:(g.comingSoon||cardVipLocked)?"⌑":"↗"}));
      bottom.append(genre,choose);content.append(top,title,desc,bottom);card.append(art,shade,content);
      const select=()=>{selectedIndex=i;renderHero();renderCards();$("#discover").scrollIntoView({behavior:"smooth",block:"start"});};
      card.addEventListener("click",select);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select();}});
      grid.append(card);
    });
    $("#gameCount").textContent=t("gamesCount").replace("{n}",String(games.length).padStart(2,"0"));
  }
  const donateLink=$("#donateLink");
  if(donateLink) donateLink.href=safeUrl(donationUrl)||"#";
  const launcherLink=$("#launcherLink");
  if(launcherLink) launcherLink.addEventListener("click",e=>{e.preventDefault();alert(language==="fa"?"دانلود لانچر به‌زودی در دسترس خواهد بود.":"The GAME HUB launcher will be available soon.");});
  $("#languageToggle").addEventListener("click",()=>{language=language==="en"?"fa":"en";updateStaticText();renderHero();renderCards();});
  $("#prevGame").addEventListener("click",()=>{selectedIndex=(selectedIndex+games.length-1)%games.length;renderHero();renderCards();});
  $("#nextGame").addEventListener("click",()=>{selectedIndex=(selectedIndex+1)%games.length;renderHero();renderCards();});
  $("#detailsButton").addEventListener("click",()=>$("#detailsDialog").showModal());
  $("#closeDetails").addEventListener("click",()=>$("#detailsDialog").close());
  $("#detailsDialog").addEventListener("click",e=>{if(e.target===$("#detailsDialog"))$("#detailsDialog").close();});
  document.querySelectorAll(".nav-item").forEach(link=>link.addEventListener("click",()=>{
    document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item===link));
  }));
  // Add your audio files to assets/music using these exact filenames.
  const playlist=[
    {title:"GAME HUB Track 01",src:"assets/music/track-01.mp3"},
    {title:"GAME HUB Track 02",src:"assets/music/track-02.mp3"},
    {title:"GAME HUB Track 03",src:"assets/music/track-03.mp3"}
  ];
  const audio=$("#siteAudio"), musicToggle=$("#musicToggle"), trackName=$("#trackName"), musicTime=$("#musicTime");
  let trackIndex=0;
  function loadTrack(index,autoplay=false){trackIndex=(index+playlist.length)%playlist.length;const track=playlist[trackIndex];audio.src=track.src;trackName.textContent=track.title;musicTime.textContent="00:00";if(autoplay)audio.play().then(()=>{musicToggle.textContent="Ⅱ";}).catch(()=>{musicToggle.textContent="▶";alert(language==="fa"?"فایل موسیقی پیدا نشد یا مرورگر اجازه پخش نداد. فایل‌ها را در پوشه assets/music قرار بده.":"Music file not found or playback was blocked. Add tracks to assets/music.");});}
  if(audio&&musicToggle){loadTrack(0);musicToggle.addEventListener("click",()=>{if(audio.paused){audio.play().then(()=>musicToggle.textContent="Ⅱ").catch(()=>alert(language==="fa"?"فایل موسیقی را در پوشه assets/music قرار بده.":"Add your music files to assets/music first."));}else{audio.pause();musicToggle.textContent="▶";}});$("#musicNext").addEventListener("click",()=>loadTrack(trackIndex+1,true));$("#musicPrev").addEventListener("click",()=>loadTrack(trackIndex-1,true));audio.addEventListener("ended",()=>loadTrack(trackIndex+1,true));audio.addEventListener("timeupdate",()=>{const mm=String(Math.floor(audio.currentTime/60)).padStart(2,"0"),ss=String(Math.floor(audio.currentTime%60)).padStart(2,"0");musicTime.textContent=mm+":"+ss;});audio.addEventListener("pause",()=>{if(audio.ended) return;musicToggle.textContent="▶";});}
  function syncHeaderProfile(){
    const name=localStorage.getItem("gamehub_player_name")||"Guest";
    const photo=localStorage.getItem("gamehub_avatar");
    const button=$("#accountButton");
    if(button){button.querySelector('[data-i18n="guest"]').textContent=name;const avatar=button.querySelector(".avatar");if(photo){avatar.textContent="";avatar.style.backgroundImage=`url("${photo}")`;avatar.style.backgroundSize="cover";avatar.style.backgroundPosition="center";}else{avatar.style.backgroundImage="";avatar.textContent=name.trim().charAt(0).toUpperCase()||"G";}}
  }
  window.addEventListener("storage",()=>{syncHeaderProfile();renderHero();renderCards();});window.addEventListener("pageshow",()=>{syncHeaderProfile();renderHero();renderCards();});
  syncHeaderProfile();updateStaticText();renderHero();renderCards();
})();