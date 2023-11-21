import React from 'react';
import Connectwallet from '../Images/Connect Wallet .webp';
import cast from '../Images/cast.svg';
import box from '../Images/box.svg';
import award from '../Images/award.svg';
import breifcase from '../Images/briefcase.svg';
import command from '../Images/command.svg';
import cpu from '../Images/cpu.svg';
import gitlab from '../Images/gitlab.svg';

const ConnectWallet = () => {
  const wallettype = [
    {
      walleticon: cast,
      walletType: 'Bitcollet',
      walletDis: 'I throw myself down among the tall.',
    },
    {
      walleticon: box,
      walletType: 'Polygone',
      walletDis: 'This is a great deal for cash transfer.',
    },
    {
      walleticon: award,
      walletType: 'Import',
      walletDis: 'Great opportunity to reach them.',
    },
    {
      walleticon: breifcase,
      walletType: 'TiOne',
      walletDis: 'Build your bigger offers than me.',
    },
    {
      walleticon: command,
      walletType: 'Bkashes',
      walletDis: 'Cash Transfer for the easiest way you want.',
    },
    {
      walleticon: cpu,
      walletType: 'Pyynle',
      walletDis: 'More than myself down among the Cash.',
    },
    {
      walleticon: gitlab,
      walletType: 'YesCash',
      walletDis: 'Biggest Bank transfer for the best opportunity.',
    },
  ];

  return (
    <div className='pt-[100px] px-10'>
      <div>Make Your Payment Easier</div>
      <div className='flex justify-between pt-5'>
        <div>
          <div className='text-[24px] font-bold'>Connect your wallet</div><br/>
          <div>Connect with one of the available wallet providers or create a new wallet.</div><br/>
          <div className='text-[20px] text-[#00a3ff]'>What is a wallet?</div><br/>
        </div>
        <div>
          <div>We do not own your private keys and cannot access your funds without your confirmation.</div>
        </div>
      </div>
      <div className='flex  justify-between gap-3'>
        <div className='w-full '>
          <img className='border p-5 rounded-lg shadow-lg' src={Connectwallet} alt={Connectwallet} />
        </div>
        <div className='flex flex-wrap gap-5 '>
          {wallettype.map((wallet, index) => (
            <div className='border rounded-lg shadow-lg w-[250px] p-4 hover:bg-[#00a3ff] hover:translate-y-2' key={index}>
              <div>
                <img src={wallet.walleticon} alt={wallet.walletType} />
              </div>
              <br/>
              <div className='text-[24px] font-bold '>{wallet.walletType}</div>
              <br/>
              <div>{wallet.walletDis}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
