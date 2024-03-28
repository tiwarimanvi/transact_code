import "../css/Navbar.css"
import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      setAccount("");
    })();
  }, []);

  // TODO 4.a - Complete onConnectWallet function
  const onConnectWallet = async () => {
  };
  const [active,setActive] = useState(false);

  const isActive = () => {
      window.scrollY > 0 ? setActive (true) : setActive(false);
  }

  useEffect(() => {
      window.addEventListener("scroll",isActive);

      return () => {
          window.removeEventListener("scroll",isActive)
      }
  },[])

  return (
    <div className={active ? "navbar active" : "navbar" }>
    <div className='container'>
        <div className='logo'>
            <span className='text'>transactcode</span>
            <span className='dot'>...</span>
        </div>
        <div className='links'>
            <span>Home</span>
            <span>AboutUs</span>
            {/* <span><button
          onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
          className="bg-green-500 px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer"
        >
          💳{" "}
          {wallet
            ? wallet.slice(0, 4) +
              "..." +
              wallet.slice(wallet.length - 4, wallet.length)
            : "Connect"}
          </button></span> */}
            <button className="button">Sell</button>
        </div>
    </div>
    {active && (
      <>
       <hr className="w-full h-0 border-1/2 solid border-gray-500"></hr>
    <div className='menu'>
        <span>Test</span>
        <span>Test2</span>                
    </div>
      </>

    )}
   
 
    
</div>
  );
}
export default Navbar
