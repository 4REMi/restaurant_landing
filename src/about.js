function displayAbout (){
    const AboutContent = document.createElement('div');
    AboutContent.innerHTML = `

   
    <div class="OurStory">

    <div class="singleColumn" >
        <div class="heroSections" id="Menu_Hero"> <div class="followSection "> About us </div></div>
    </div>

    <div class="twoColumns">
        <div class="infoContainer">
            <div class="iconContainer" id="location"><img src="src/location.png" alt=""></div>
            <h1 class="infoHeader">Our Story</h1>
            <hr style="border-top: 1px dotted black;">
            <div class="infoCopy" id="ourStoryCopy">Our journey started in 1985 when James, a steak lover, explored various recipes from across the world and brought them together in our menu. Ever since we are now a team of 10 expert chefs from 3 top cities in India serving you the best steaks, desserts and mocktails in town. </div>
            <div class="btnContainer">
                <button class="btn" id="btn_Story">BOOK TABLE</button>
            </div>
            <div class="asSeen">
                <div class="asseentext"> As seen on. </div>
                <div class="logosContainer">
                    <img src="src/logo1.svg" alt="logo1" class="logosIpsum">
                    <img src="src/logo2.svg" alt="logo2" class="logosIpsum">
                    <img src="src/logo3.svg" alt="logo3" class="logosIpsum">
                </div>
            </div>

        </div>
        <div class="imgContainer_ourStory">
        </div>
    </div>


</div>

`;

return AboutContent;
}

export {displayAbout};