function displayMenu (){
    const MenuContent = document.createElement('div');
    MenuContent.innerHTML = `

    <div class="Menu">
    <div class="singleColumn" >
        <div class="heroSections" id="Menu_Hero"> <div class="followSection "> Menus </div></div>
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
</div>

`;

return MenuContent;
}

export {displayMenu};