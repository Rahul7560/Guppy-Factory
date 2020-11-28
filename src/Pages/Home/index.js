import React from 'react'
import './home.css'
import Carrosel from './items/homcarrosel/carrosel'
import Card from './items/Card/card'
import fish1 from './items/Card/fish1.png'
import fish2 from './items/Card/fish2.png'
import Booking from './items/Booking/Booking'
import { Container } from 'reactstrap'

function index() {
    return (
        <div>
            <Carrosel />
            <Card
                fishname="Beta Fish"
                img={fish1}
                para1="Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laeet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aen auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus."

                fishname2="Guppy Fish"
                img2={fish2}
                para2="Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laeet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aen auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus."



            />
            <Card
                fishname="Gold Fish"
                img={fish1}
                para1="Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laeet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aen auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus."

                fishname2="Balck Moly"
                img2={fish2}
                para2="Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laeet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aen auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus."


            />
            <Container>
                <Booking />
            </Container>

        </div>
    )
}

export default index
