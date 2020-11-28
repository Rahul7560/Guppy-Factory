import React from 'react'
import './carrosel.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Beta from './Beta.png'


function carrosel() {



    return (
        <div>
            <div className="carroselBackground">
                <div class="bettamain">

                    <div className="bettaimg">
                        <img src={Beta} alt="betalogo" />
                    </div>


                </div>
                <div>
                    <h1 className="reactHappy linear-wipe mt-4">  Guppy Factory</h1>


                </div>





            </div>

        </div>
    )
}

export default carrosel
