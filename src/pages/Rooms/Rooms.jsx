
import RoomsHero from '../../components/RoomsHero/RoomsHero'
import RoomFilterBox from '../../components/RoomFilter/RoomFilterBox'
import RoomsSection from '../../components/RoomSection/RoomSection'
import { useEffect } from 'react';


const Rooms = () => {

      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <RoomsHero/>
        <RoomFilterBox/>
        <RoomsSection/>
    </div>
  )
}

export default Rooms
