import './App.css'
import { Button } from "@/components/ui/button"
 

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
    {/* Fixed Header */}
    <header className="text-white fixed w-full top-0 left-0 z-10  shadow-md h-36 ">
      <div className="bg-[#5dbf13] h-20 flex items-center w-full">
        {/* container */}
         <div className="max-w-[1200px] ml-auto mr-auto w-full pl-12 pr-12" >
          <div className="flex items-center justify-between">
            <span>
              <img src="https://themezhub.net/odex-live/odex/assets/img/logo-light.png" className="max-w-[120px]" />
            </span>
            <span>
              Call Us
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#1ca301] h-16 flex items-center w-full">
        {/* container */}
        <div className="max-w-[1200px] ml-auto mr-auto w-full pl-12 pr-12" >
          <div className="flex items-center justify-between">
              <span>
                <img src="https://themezhub.net/odex-live/odex/assets/img/logo-light.png" className="max-w-[120px]" />
              </span>
              <span>
                Call Us
              </span>
            </div>
        </div>
      </div>
    </header>
    

    {/* Main Content */}
    <main className="mt-24 p-6">
      <h1 className="text-3xl font-bold">Welcome to My Website</h1>
      <p className="mt-4">This is the main content of the page. Scroll down to see the header remain fixed.</p>
    </main>
  </div>
  );
};

export default App;
