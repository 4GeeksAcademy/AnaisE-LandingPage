import React from "react";
 
 //include images into your bundle
 import rigoImage from "../../img/rigo-baby.jpg";
 
 import NavigationBar from "./NavigationBar.jsx"
 import Jumbotron from "./Jumbotron.jsx"
 import CardElement from "./CardElement.jsx"
 import Footer from "./Footer.jsx"
 //create your first component
 const Home = () => {
 	return (
 		<div className="text-center">
             
 		<>
 		
 			<NavigationBar/>
 			<div className="container">
 				<Jumbotron/>
 				<div className="row"> 
 					<CardElement/>
 					<CardElement/>
 					<CardElement/>
 					<CardElement/>
 				</div>
 				<Footer/>
 			</div>
 
 			<h1 className="text-center mt-5">Hello Rigo!</h1>
 			<p>
 				<img src={rigoImage} />
 			</p>
 			<a href="#" className="btn btn-success">
 				If you see this green button... bootstrap is working...
 			</a>
 			<p>
 				Made by{" "}
 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
 				love!
 			</p>
 		</div>
 		</>
 	);
 };