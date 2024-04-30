import * as React from 'react';
import { ethers } from 'ethers';

function App() {
  const [wallet, setWallet] = React.useState(null);

  const ConnectWallet = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      // window.alert(`${pollName} successfully created!`);
      // window.location.replace('configurePoll/pollDash');
    } catch (error) {
      window.alert("Wallet could not be connected.");
    }
  }

  return (
    <>
    {/* TODO: Figure out how TF to toggle this after connecting*/}
      <button onClick={ConnectWallet}>Connect Wallet</button>
      <br />
      <button>Enroll</button>
      <br />
      <button>Unenroll</button>
      <br />
      <button>See Attendees</button>
      <br />
      <form>
        <button>Add Company</button>
        <input></input>
      </form>
    </>
  );
}

export default App;
