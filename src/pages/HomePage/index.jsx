import { useState } from 'react';
import { useEffect } from 'react';
import { Banner } from '../../components/Banner';
import { RoomOrder } from '../../components/RoomOrder';
import { Rooms } from '../../components/Rooms';
import { Footer } from '../../components/Footer';
import './style.css';

export const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomList, setRoomList] = useState([]);

  const selectedRoomData = roomList.find((room) => {
    return room.name === selectedRoom;
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      console.log(data.data);
      setRoomList(data.data);
    };
    fetchRooms();
  }, []);

  return (
    <>
      <Banner />
      <Rooms onSelect={setSelectedRoom} roomList={roomList} />
      {selectedRoomData && <RoomOrder selectedRoomData={selectedRoomData} />}
      <Footer />
    </>
  );
};
