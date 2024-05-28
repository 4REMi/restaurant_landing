function displayHome (){
    const HomeContent = document.createElement('div');
    HomeContent.innerHTML = `

    <div class="heroContainer">
    <div class="hero-section1">
        <div class="logocontainer"><img src="/src/lasagna-svgrepo-com.svg" alt=""></div>
        <div class="container container1">
            <h1 class="heroSec">Remi's Dearest</h1>
        </div>
        <div class="container container2">
            <div class="columnHero">Comforts</div>
            <div class="separator"></div>
            <div class="columnHero">Classics</div>
            <div class="separator"></div>
            <div class="columnHero">Curiosities</div>
        </div>
        <div class="btnContainer">
            <button class="btn">BOOK TABLE</button>
        </div>

    </div>
    <div class="hero-section2">
       <div class="imgHero"><div class="video-background">
        <video autoplay muted loop playsinline>
          <source src="/src/videoHero.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video></div>
        </div></div>
    </div>


<div class="OurStoryContainer">
    <div class="starContainer"><p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
    </div>
    <div class="storyQuote">"THE FOOD IS NOT GOOD. <br> I WON'T COME BACK, EVER."</div> <br>
    <div class="storyAuthor">-George Clinton</div>
</div>

<div class="twoColumns">
    <div class="infoContainer">
        <div class="iconContainer" id="location"><img src="/src/location.png" alt=""></div>
        <h1 class="infoHeader">Hours & Location</h1>
        <hr style="border-top: 1px dotted black;">
        <div class="infoCopy">Want to pay us a visit? <br> Know about our hours and where to find us. <br>Make sure you order our Lorem Ipsum.</div>
        <div class="btnContainer" id="btn_Hrs">
            <button class="btn">BOOK TABLE</button>
        </div>
        <div class="hoursContainer">
            <section class="hours-section">
                <h2 id="HoursHeader">HOURS</h2>
                <div class="grid-container">
                    <div>Monday</div><div>12pm-9pm</div>
                    <div>Tuesday</div><div>12pm-9pm</div>
                    <div>Wednesday</div><div>12pm-10pm</div>
                    <div>Thursday</div><div>12pm-10pm</div>
                    <div>Friday</div><div>12pm-10pm</div>
                    <div>Saturday</div><div>12pm-10pm</div>
                    <div>Sunday</div><div>12pm-10pm</div>
                </div>
            </section>
        </div>
    </div>
    <div class="imgContainer_hrs">
    </div>
</div>

<div class="twoColumns">
    <div class="asSeen" id="asSeenHP">
        <div class="asseentext"> As seen on. </div>
        <div class="logosContainer">
            <img src="/src/logo1.svg" alt="logo1" class="logosIpsum">
            <img src="/src/logo2.svg" alt="logo2" class="logosIpsum">
            <img src="/src/logo3.svg" alt="logo3" class="logosIpsum">
            <img src="/src/logo4.svg" alt="logo3" class="logosIpsum">
        </div>
    </div>
</div>

    <div class="twoColumns" id="MenuMiniSection">
        <div class="infoContainer">

            <div class="menu-section">
                <h1 class="infoHeader" id="menuHeader" >What's on the menu?</h1>
                <div class="infoCopy" id="menuCopy">We have something special for you. <br> Know about our hours and where to find us. <br>New menu every first of the month.</div>
                
                <div class="menu-item">
                    Lemon and Garlic Green Beans - <span class="price">$15.00</span>
                    <div class="description">Lemon / Garlic / Beans</div>
                </div>
                <div class="menu-item">
                    Bacon-wrapped Shrimp with Garlic - <span class="price">$21.50</span>
                    <div class="description">Bacon / Shrimp / Garlic</div>
                </div>
                <div class="menu-item">
                    LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI - <span class="price">$18.50</span>
                    <div class="description">Lamb / Wine / Butter</div>
                </div>
                <div class="menu-item">
                    Imported Oysters Grill (5 Pieces) - <span class="price">$20.00</span>
                    <div class="description">Oysters / Veggie / Ginger</div>
                </div>
                <div class="btnContainer">
                    <button class="btn">SEE REST</button>
                </div>
            </div>

        </div>
        <div class="imgContainer_menu">
        </div>
    </div>

    <div class="singleColumn" >
        <div class="imgCover"> <div class="followSection "> FOLLOW US <BR> @REMIS_DEAREST</div></div>
    </div>
</div>

`;

return HomeContent;
}

export {displayHome};