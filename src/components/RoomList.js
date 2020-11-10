import React from 'react'
import Room from './Room'

export default function RoomList({ rooms }) {
    if (rooms.length === 0) {
        <div className='empty-search'>
            <h3>unfortunatky no rooms matched by your search parameter</h3>
        </div>
        
    }
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item}></Room>
                    })
                }
            </div>
        </section>
    )
}