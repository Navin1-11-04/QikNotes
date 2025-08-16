import Footer from "./_components/footer";
import {Heading} from "./_components/heading";

const LandingPage = () => {
    return (
       <div className="min-h-full flex flex-col">
          <div className="flex flex-col items-center justify-center flex-1">
             <Heading/>
          </div>
          <Footer/>
       </div>
    );
}
 
export default LandingPage;