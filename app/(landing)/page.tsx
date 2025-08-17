import {Heading} from "./_components/heading";
import Hero from "./_components/hero";

const LandingPage = () => {
    return (
       <div className="min-h-full flex flex-col">
          <Heading/>
          <div className="flex flex-col items-center justify-center flex-1 px-3">
            <Hero/>
         </div>
       </div>
    );
}
 
export default LandingPage;