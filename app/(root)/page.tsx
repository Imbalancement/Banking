import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = () => {
  const loggedIn = { firstName: 'Corey', lastName: "W", email:"coreyimba@gmail.com"}


  return (
    <section className='home'> 
    <div className='home-content'>
      <header className='home-header'>

       <HeaderBox 
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName || 'Guest'}
       subtext="Access and mange your account and
       transactions efficiently"
       
       />
      <TotalBalanceBox 
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={1250.35}
      />

      </header>

      RECENT TRANSACTIONS
    </div>

    <RightSideBar 
    user={loggedIn}
    transactions={[]}
    banks={[{}, {}]}
    />
    </section>
  )
}

export default Home