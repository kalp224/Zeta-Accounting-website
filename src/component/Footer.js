import React from "react";
import "./Footer.css";

function Footer() {
 return (


  <div className="container">

   <div className="row">

    {/* Column1 */}
    <div className="col">

     <h4>ZETA ACCOUNTING PVT.LTD</h4>
     <ul className="list-unstyled">
      <li>342-420-6969</li>
      <li>Ahmedabad - Gujarat</li>
      <li>Navgiri Road - Sahapura</li>
     </ul>
    </div>
    {/* Column2 */}
    <div className="col">
     <h4>BLOGS</h4>
     <ul className="list-unstyled">
      <li>Valuation</li>
      <li>Cryptocurrency</li>
      <li>Retirement</li>
     </ul>
    </div>
    {/* Column3 */}
    <div className="col">
     <h4>CONNECT US</h4>
     <ul className="list-unstyled">
      <li>Instagram</li>
      <li>Twitter</li>
      <li>LinkedIn</li>
     </ul>
    </div>
   </div>
   <hr />
   <div className="row">
    <p className="col-sm">
     &copy;{new Date().getFullYear()} Zeta Accounting | All rights reserved |
     Terms Of Service | Privacy
    </p>
   </div>
  </div>

 );
}

export default Footer;