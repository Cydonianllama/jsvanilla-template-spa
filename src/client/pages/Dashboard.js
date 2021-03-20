const nav = require('../components/nav').nav;
const footer = require('../components/footer').footer;

const Dashboard = 
`
${nav}
    <div class = "body-dashboard">
        <div class="actions-dashboard">
            <form id ="form-add-product-to-ticket" action="" method ="">
                <h2>ADD Product</h2>
                <input type="text" placeholder = "name product">
                <input type="number" placeholder = "quantity">
                <select name="estado" id="">
                    <option value="" selected>select</option>
                    <option value="less">less</option>
                    <option value="optimal">optimal</option>
                </select>
                <textarea name="description" cols="30" rows="4"></textarea>
                <input type="text" placeholder="price">
                <button id ="add-product" type ="submit">add</button>
            </form>
            <form action="">
                <input type="text">
                <select name="buscarpor" id="">
                    <option value="" selected>select</option>
                    <option value="id">id</option>
                    <option value="name-product">name</option>
                </select>
            </form>
        </div>
        <table class ="table-product">
            <thead>
                <tr>
                    <th>CODE</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>State</th>
                    <th>Price</th>
                    <th>options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1115</td>
                    <td>Bolsa de arroz</td>
                    <td>45</td>
                    <td>a product of prove the virus</td>
                    <td><span>optimal</span></td>
                    <td>$78</td>
                    <td>
                        <button>modify</button>
                        <button>delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
${footer}
`;

module.exports = {Dashboard};