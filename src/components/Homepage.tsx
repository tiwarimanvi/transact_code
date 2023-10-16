// import React from 'react';
// import project_card from "../data/HomeData";
// import "../css/homepage.css"
// import {
//     Card,
//     CardBody,
//     CardFooter,
//     Button,
//     Typography,
// } from "@material-tailwind/react";

// function Home() {
//     let projectdata = project_card.map((p) => (
//         <div className='card' key={p.id}>
//             <Card>
//                 <img className='w-70' src={p.thumb} alt={p.project_name} />
//                 <CardBody className='card-body'>
//                     <div>
//                         <div className='card-body-pname'>
//                             <Typography>
//                                 {p.project_name}
//                             </Typography>
//                         </div>
//                         <div>
//                             <Typography>
//                                 {p.project_description.slice(0, 100) + "......"}
//                             </Typography>
//                         </div>
//                     </div>
//                 </CardBody>
//                 <CardFooter className='card-footer'>
//                     <div>
//                         <span>
//                             Price in XTZ(ꜩ)
//                         </span>
//                         <Button> {p.price}</Button>
//                     </div>
//                 </CardFooter>
//             </Card>
//         </div>
//     ));

//     return (
//         <div className="home">
//             {projectdata}
//         </div>
//     );
// }

// export default Home;

import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import "../css/homepage.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/TC/get_projectdata/1/") // Replace this URL with your API endpoint
            .then(response => response.json())
            .then(data => {
                this.setState({ projects: data });
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }

    render() {
        const { projects } = this.state;

        const projectCards = projects.map(project => (
            <div className='card' key={project.id}>
                <Card>
                console.log({project.project_images})
                    <img className='w-70' src={project.project_images} alt={project.project_name} />
                    <CardBody className='card-body'>
                        <div>
                            <div className='card-body-pname'>
                                <Typography>
                                    {project.project_name}
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    {project.description.slice(0, 100) + "......"}
                                </Typography>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <div>
                            <span>
                                Price in XTZ(ꜩ)
                            </span>
                            <Button> {project.price}</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        ));

        return (
            <div className="home">
                {projectCards}
            </div>
        );
    }
}

export default Home;
