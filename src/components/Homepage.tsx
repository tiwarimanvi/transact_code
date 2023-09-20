import React from 'react';
import project_card from "../data/HomeData";
import "../css/homepage.css"
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";

function Home() {
    let projectdata = project_card.map((p) => (
        <div className='card' key={p.id}>
            <Card>
                <img className='w-70' src={p.thumb} alt={p.project_name} />
                <CardBody className='card-body'>
                    <div>
                        <div className='card-body-pname'>
                            <Typography>
                                {p.project_name}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                {p.project_description.slice(0, 100) + "......"}
                            </Typography>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className='card-footer'>
                    <div>
                        <span>
                            Price in XTZ(ꜩ)
                        </span>
                        <Button> {p.price}</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    ));

    return (
        <div className="home">
            {projectdata}
        </div>
    );
}

export default Home;
