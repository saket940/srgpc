export default function main(li1, li2, li3, li4, li5, li6) {
  document.getElementById("body").innerHTML = `<header>
    <div id="" class="logo">


      <h1>
        <img id="il"
          src="logo.png"
          class="logo img" alt="SRGPC Logo">
        S. R. Government Polytechnic College, Sagar (M.P.), India<br>
        सहोद्रा राय शासकीय पॉलिटेक्निक महाविद्यालय, सागर (म.प्र.), भारत
      </h1>
    </div>
  </header>
    <nav id="nav">
    <button id="navimg"><img  src="nav.svg" alt="nav"></button>
        <ul id="ul">
    <div id="navli">
    
    <li>
      <a href="${li1}.html">${li1}</a>
    </li>
    <li>
      <a href="${li2}.html">${li2}</a>
    </li>
    <li>
      <a href="${li3}.html">${li3}</a>
    </li>
    <li>
      <a href="${li4}.html">${li4}</a>
    </li>
    <li>
      <a href="${li5}.html">${li5}</a>
    </li>
    <li>
      <a href="${li6}.html">${li6}</a>
    </li>
    <li>
      <a id="contact-link">Contact us </a>
    </li></div>
    </ul>
  </nav>
  <div id="main" class="main" ></div>
  <div class="cb" >
     <div class="chatbot-icon" onclick="openChatbot()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-10 10 9.9 9.9 0 0 0 2.4 6.4l-1 3.6a1 1 0 0 0 1.2 1.2l3.6-1A10 10 0 1 0 12 2zm3 11h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm-1-4h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2z"/>
    </svg>
  </div>
  </div>
  <footer id="footer">
    <div>
      <a href="https://dte.mponline.gov.in/portal/services/onlinecounselling/counshomepage/home.aspx"><button> <img class="dte"
            src="dte.png"
            alt="DTE"></button></a>
       <a href="https://www.facebook.com/SRGPCSAGAR"><button><img id="facebook"
            src="facebook.png"
            alt="facebook"></button></a>
      <a href="https://www.youtube.com/channel/UCxGj48z8UbXJC26y18HLwlg?app=desktop"><button> <img class="yt"
            src="yt.png"
            alt="Youtube"></button></a> 
      <a href="https://www.rgpvdiploma.in/"><button class="rgpv"> <img id="rgpv"
            src="rgpv.png"
            alt="rgpv"></button></a>
    </div>
    <h1>Contact Us</h1>
    <p>Address: Sahodra Rai Government Polytechnic College, Tilli Road, Sagar (M.P.)-470001<br>Email:
      <a href="mailto:prinsrgp.sgr@mp.gov.in">prinsrgp.sgr@mp.gov.in</a><br>Landline: 07582292470, 9425436423<br>Web: www.srgpcsagar.in</p>
    <div id="map"><iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.936808761335!2d78.760861!3d23.820846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d3e47185264f%3A0xcfcddae270af19fd!2sS.%20R.%20Government%20Polytechnic%20College%2C%20Sagar!5e0!3m2!1sen!2sus!4v1729840224161!5m2!1sen!2sus"
        width="500" height="50" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"title="map"></iframe></div>
    <h2>&copy; 2024 SRGPC Sagar</h2>
  </footer>
`}

export function br() {
  return `<div class="br"><div class="brr"></div><div class="brs"></div><div class="brl"></div></div>`;
};
// Function to add top content
export function top_up(image, heading, paragraph, Br = 0) {
  let className = "top";
  document.getElementById("main").innerHTML +=
    `<div class="${className}">
            <img src="${image}" alt="${heading}">
            <h2>${heading}</h2>
            <p>${paragraph}</p>
         </div>`;
  if (Br == 1) {
    br()
    document.getElementById("main").innerHTML +=br();
  }

};

// Function to add right content
export function right(image, heading, paragraph, Br = 0) {
  document.getElementById("main").innerHTML +=
    `<div class="right">
            <div>
            <h2>${heading}</h2>
            <p>${paragraph}</p></div><div>
            <img src="${image}" alt="${heading}"></div>
         </div>`;
  if (Br == 1) {
    br()
    document.getElementById("main").innerHTML +=br();
  };
}

// Function to add left content
export function left(image, heading, paragraph, Br = 0) {
  document.getElementById("main").innerHTML +=
    `<div class="left"><div>
  <img src="${image}" alt="${heading}"></div><div class="c">
  <h2>${heading}</h2>
  <p>${paragraph}</p></div>
  </div>`;
  if (Br == 1) {
    br()
    document.getElementById("main").innerHTML +=br();
  };
}

// Example usage
// let ag = "https://via.placeholder.com/150"; // Example image URL
// top_up(ag, "Top Heading", "This is the top paragraph.", 1);
// right(ag, "Right Heading", "ThisThis is th  e leftasdzerte   strdrdd  ty paragsdau idfioshidfjd;ogip fgp'hopghpnjph[pmnm  iosob cn  3ew rfesd fd fraph is the right paragraph.", 1);
// left(ag, "Left Heading", "This is th  e leftasdzerte   strdrdd  ty paragsdau idfioshidfjd;ogip fgp'hopghpnjph[pmnm  iosob cn  3ew rfesd fd fraph.", 1);
// right(ag, "bmxzbbcm", "esedtradtfsthaf whsgdhjsfhjjhvshgjhvjhvjhgfvdjhsvfhdbsjhfb hdsbhfb hsbhfhjhfsdbcbsdhbhjef hbdbnxbsbdfjbs", 1)
// left(ag, "Left Heading", "This is th  e leftasdzerte   strdrdd  ty paragsdau idfioshidfjd;ogip fgp'hopghpnjph[pmnm  iosob cn  3ew rfesd fd fraph.",);