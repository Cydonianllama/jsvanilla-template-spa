const footer = require('../components/footer').footer; 
const nav = require('../components/nav').nav;

const body =
`
${nav}
    <div class="body-home">
        <div class ="principal-panel">
            <div class="global-information-products">
                <p>Numbers of product : <span> 500</span></p>
                <br>
                <button>See more</button>
            </div>
            <div class = "global-information-to-user-interactions">
                <p>Numbers of entries <span>50/day</span></p>
                <button>See More</button>
            </div>
        </div>
    </div>
${footer}
`;

module.exports = {body};