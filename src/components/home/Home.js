import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../data/data.json";
function Home(){
return (
    <>
    {}
    <Header/>
    {}
    <Tours data={data}/>
    {}
    <Footer/>
    
    </>
);
}
export default Home;