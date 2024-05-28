function displayHours (){
    const HoursContent = document.createElement('div');
    HoursContent.innerHTML = `

    <div class="hrsNLoc">
    <div class="singleColumn" >
        <div class="heroSections" id="hrsNLoc_Hero"> <div class="followSection "> HOURS & LOCATION </div></div>
    </div>
    <div class="twoColumns">
        <div class="infoContainer">
            <div class="iconContainer" id="location"><img src="/src/location.png" alt=""></div>
            <h1 class="infoHeader">Hours & Location</h1>
            <hr style="border-top: 1px dotted black;">
            <div class="infoCopy">Want to pay us a visit? <br> Know about our hours and where to find us. <br>Make sure you order our Lorem Ipsum.</div>
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
</div>

`;

return HoursContent;
}

export {displayHours};