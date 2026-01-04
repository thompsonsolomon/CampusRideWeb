import Top from '../components/Screens/Home/Top'
import Search from '../components/Screens/Home/Search'
import Map from '../components/Screens/Home/Map'
import ResponsiveHeader from '../components/common/ResponsiveHeader'
import RecentRide from '../components/Screens/Home/RecentRide'

function Home() {
  return (
    <div className='bg-gray-100 w-full h-screen max-h-[100dvh]'>
     <Top />
     <Search />
     <Map  />
     <RecentRide />

     <ResponsiveHeader />
    </div>
  )
}

export default Home