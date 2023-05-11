import React from 'react';


const rooms = [
    {
      title: 'Semi-Private Rooms',
      description: 'A spacious room with private bath shared with one or two other same gender residents.',
    },
    {
      title: 'Private Room with Shared Bath',
      description: 'A private room with a slider to the courtyard sharing a full bath with one other same gender resident.'
    },
    {
      title: 'Small Private Room with Private Bath',
      description: 'A private room offering its own private bath.'
    },
    {
      title: 'Private Room with Private Bath',
      description: 'Spacious private room with sliding glass door to the beautiful enclosed court yard.'
    },
    {
      title: 'Large Private Room with Private Bath',
      description: 'Spacious private room with sliding glass door to the beautiful enclosed court yard.'
    },
    {
      title: 'Two-room Suite',
      description: 'This consists of a living room, bedroom and bath. Many offer sliding glass doors to courtyard or private patio.'
    }
  ];

export default () => {
    return (
        <div>
        <h2>Accomodations</h2>
        <p>
          All of our accommodations are equipped with nurse call systems in the rooms and the bathrooms for our residents needing assistance.
        </p>
        <p>
          Rates vary according to desired accomodations starting at $2450 per month.
        </p>
        <p>
        Century Pines offers the following accommodations:
        </p>
        <ul id="rooms">
        {rooms.map((room, i)=>(
          <li key={i} className="room">
            <div className="room-details">
              <h3>{room.title}</h3>
              <p>{room.description}</p>
            </div>
          </li>
        ))}
        </ul>

      <style jsx>{
        `
        ul#rooms {
          margin: 0;
          padding: 0;
        }
        .room {
          display: inline-block;
          list-style: none;
          width: 33%;
          vertical-align: top;

        }
        .room .room-details {
          font-size: 22px;
          margin: 10px;
          padding: 0px 20px;
          border: 1px dotted grey;
        }
        @media (max-width: 670px) {
          .room {
            width: 100%;
          }
        }
        `}
      </style>
      </div>
    )
}