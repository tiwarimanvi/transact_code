// // import React, { Component } from 'react';
// // import axios from 'axios';

// // class ProjectForm extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             name: '',
// //             email: '',
// //             images: null,
// //             project_name: '',
// //             github_link: '',
// //             project_images: null,
// //             compressed_file: null,
// //             description: '',
// //         };
// //     }

// //     handleChange = (e) => {
// //         const { name, value, type, files } = e.target;
// //         this.setState({
// //             [name]: type === 'file' ? files[0] : value,
// //         });
// //     };

// //     handleSubmit = (e) => {
// //         e.preventDefault();

// //         const formData = new FormData();
// //         formData.append('name', this.state.name);
// //         formData.append('email', this.state.email);
// //         formData.append('images', this.state.images);
// //         formData.append('project_name', this.state.project_name);
// //         formData.append('github_link', this.state.github_link);
// //         formData.append('project_images', this.state.project_images);
// //         formData.append('compressed_file', this.state.compressed_file);
// //         formData.append('description', this.state.description);

// //         // Use Axios for the POST request
// //         axios.post('http://localhost:8000/TC/upload/', formData)
// //             .then((response) => {
// //                 // Handle success
// //                 console.log(response.data);
// //                 // Optionally, you can reset the form after successful submission
// //                 this.setState({
// //                     name: '',
// //                     email: '',
// //                     images: null,
// //                     project_name: '',
// //                     github_link: '',
// //                     project_images: null,
// //                     compressed_file: null,
// //                     description: '',
// //                 });
// //             })
// //             .catch((error) => {
// //                 // Handle error
// //                 console.error(error);
// //             });
// //     };

// //     render() {
// //         return (
// //           <div className='text-center'>
// //             <form onSubmit={this.handleSubmit} className="mt-8 mb-2">
// //                 <div className="mb-4 flex flex-col">
// //                     <label className='space-x-6'>Name:</label>
// //                     <input
// //                         className='space-x-6'
// //                         type="text"
// //                         name="name"
// //                         value={this.state.name}
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Email:</label>
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={this.state.email}
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Images:</label>
// //                     <input
// //                         type="file"
// //                         name="images"
// //                         accept="image/*"
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Project Name:</label>
// //                     <input
// //                         type="text"
// //                         name="project_name"
// //                         value={this.state.project_name}
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Github Link:</label>
// //                     <input
// //                         type="url"
// //                         name="github_link"
// //                         value={this.state.github_link}
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Project Images:</label>
// //                     <input
// //                         type="file"
// //                         name="project_images"
// //                         accept="image/*"
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Compressed File:</label>
// //                     <input
// //                         type="file"
// //                         name="compressed_file"
// //                         accept=".zip,.rar"
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div className="mb-4 flex flex-col gap-6">
// //                     <label>Description:</label>
// //                     <textarea
// //                         name="description"
// //                         value={this.state.description}
// //                         onChange={this.handleChange}
// //                     />
// //                 </div>
// //                 <div>
// //                     <button type="submit">Submit</button>
// //                 </div>
// //             </form>
// //             </div>
// //         );
// //     }
// // }

// // export default ProjectForm;
// import React, { Component } from 'react';
// import axios from 'axios';

// class ProjectForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             images: null,
//             project_name: '',
//             github_link: '',
//             project_images: null,
//             compressed_file: null,
//             description: '',
//         };
//     }

//     handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         this.setState({
//             [name]: type === 'file' ? files[0] : value,
//         });
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('name', this.state.name);
//         formData.append('email', this.state.email);
//         formData.append('images', this.state.images);
//         formData.append('project_name', this.state.project_name);
//         formData.append('github_link', this.state.github_link);
//         formData.append('project_images', this.state.project_images);
//         formData.append('compressed_file', this.state.compressed_file);
//         formData.append('description', this.state.description);

//         axios
//             .post('http://localhost:8000/TC/upload/', formData)
//             .then((response) => {
//                 console.log(response.data);
//                 this.setState({
//                     name: '',
//                     email: '',
//                     images: null,
//                     project_name: '',
//                     github_link: '',
//                     project_images: null,
//                     compressed_file: null,
//                     description: '',
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     render() {
//         return (
//             <div className="container mx-auto mt-8">
//                 <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4 text-center">
//                     <div className="mb-4 flex flex-wrap -mx-2">
//                         <div className="w-full md:w-1/2 px-0 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mr-0 mb-2 pr-10 mr-10" htmlFor="name">
//                                 Name:
//                             </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={this.state.name}
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 placeholder="John Doe"
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Email:
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={this.state.email}
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 placeholder="johndoe@example.com"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-4 flex flex-wrap -mx-2">
//                         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
//                                 Images:
//                             </label>
//                             <input
//                                 type="file"
//                                 name="images"
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project_name">
//                                 Project Name:
//                             </label>
//                             <input
//                                 type="text"
//                                 name="project_name"
//                                 value={this.state.project_name}
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 placeholder="My Awesome Project"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-4 flex flex-wrap -mx-2">
//                         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github_link">
//                                 GitHub Link:
//                             </label>
//                             <input
//                                 type="url"
//                                 name="github_link"
//                                 value={this.state.github_link}
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 placeholder="https://github.com/yourusername/yourproject"
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project_images">
//                                 Project Images:
//                             </label>
//                             <input
//                                 type="file"
//                                 name="project_images"
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-4 flex flex-wrap -mx-2">
//                         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="compressed_file">
//                                 Compressed File:
//                             </label>
//                             <input
//                                 type="file"
//                                 name="compressed_file"
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 accept=".zip, .rar"
//                             />
//                         </div>
//                         <div className="w-full px-2">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//                                 Description:
//                             </label>
//                             <textarea
//                                 name="description"
//                                 value={this.state.description}
//                                 onChange={this.handleChange}
//                                 className="shadow appearance-none border rounded w-max py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 placeholder="Describe your project..."
//                                 rows="2"
//                             />
//                         </div>
//                     </div>
                    
//                     <div className="flex items-center justify-center mt-4">
//                         <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default ProjectForm;
import React, { Component } from 'react';
import axios from 'axios';

class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            images: null,
            project_name: '',
            github_link: '',
            project_images: null,
            compressed_file: null,
            description: '',
        };
    }

    handleChange = (e) => {
        const { name, value, type, files } = e.target;
        this.setState({
            [name]: type === 'file' ? files[0] : value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('images', this.state.images);
        formData.append('project_name', this.state.project_name);
        formData.append('github_link', this.state.github_link);
        formData.append('project_images', this.state.project_images);
        formData.append('compressed_file', this.state.compressed_file);
        formData.append('description', this.state.description);

        axios
            .post('http://localhost:8000/TC/upload/', formData)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    name: '',
                    email: '',
                    images: null,
                    project_name: '',
                    github_link: '',
                    project_images: null,
                    compressed_file: null,
                    description: '',
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <div className="container mx-auto mt-8">
                <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-semibold mb-4">Submit Your Project</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="harry"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            //placeholder="johndoe@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                            Project Images (Max 5):
                        </label>
                        <input
                            type="file"
                            name="images"
                            onChange={this.handleChange}
                            multiple
                            accept="image/*"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project_name">
                            Project Name:
                        </label>
                        <input
                            type="text"
                            name="project_name"
                            value={this.state.project_name}
                            onChange={this.handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="My Awesome Project"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github_link">
                            GitHub Repository Link:
                        </label>
                        <input
                            type="url"
                            name="github_link"
                            value={this.state.github_link}
                            onChange={this.handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="https://github.com/yourusername/yourproject"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project_images">
                            Additional Project Images (Max 5):
                        </label>
                        <input
                            type="file"
                            name="project_images"
                            onChange={this.handleChange}
                            multiple
                            accept="image/*"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="compressed_file">
                            Compressed File (ZIP/RAR):
                        </label>
                        <input
                            type="file"
                            name="compressed_file"
                            onChange={this.handleChange}
                            accept=".zip, .rar"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Project Description:
                        </label>
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Describe your project..."
                            rows="1"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProjectForm;
