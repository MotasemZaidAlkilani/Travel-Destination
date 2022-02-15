import Header from "../header/Header";
import Tours from "../tours/Tours";
import Tours_details from "../TourDetails/TourDetails";
import Footer from "../footer/Footer";
import data from "../data/db.json";
import {Routes,Route} from "react-router-dom";
function Home(){
    

   
return (
    <>
    {}
    <Header/>
    <Routes>
    
    {}
    
    <Route path="/" element={<Tours data={data}/>}/>
    <Route path="/city/:id" element={<Tours_details data={data}  />}/>
    {}
  
    </Routes>
    <Footer/>
    </>
);
}
export default Home;