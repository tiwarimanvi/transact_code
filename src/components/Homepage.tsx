import React from 'react';
import project_card from "../data/HomeData";
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";

function Home() {
    let projectdata = project_card.map((p) => (
        <div className='' key={p.id}>
            <Card>
                <div>
                    <img className='' src={p.thumb} alt={p.project_name} />
                </div>
                
                <CardBody>
                    <div>
                        <div>
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
                <CardFooter>
                    <div>
                        <Button> {p.price}</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    ));

    return (
        <div className="px-4">
            {projectdata}
        </div>
    );
}

export default Home;
