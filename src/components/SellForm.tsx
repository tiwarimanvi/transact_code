import React, { useState, ChangeEvent, FormEvent } from 'react';

function SellForm() {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    thumbnailImage: null as File | null,
    techStacks: '',
    priceInXTZ: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      thumbnailImage: file || null,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to your server or perform other actions
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sell Your Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName" className="block font-medium">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block font-medium">
            Project Description:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        {/* Thumbnail Image */}
        <div>
          <label htmlFor="thumbnailImage" className="block font-medium">
            Thumbnail Image:
          </label>
          <input
            type="file"
            id="thumbnailImage"
            name="thumbnailImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Tech Stacks Used */}
        <div>
          <label htmlFor="techStacks" className="block font-medium">
            Tech Stacks Used:
          </label>
          <input
            type="text"
            id="techStacks"
            name="techStacks"
            value={formData.techStacks}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Price in XTZ */}
        <div>
          <label htmlFor="priceInXTZ" className="block font-medium">
            Price in XTZ:
          </label>
          <input
            type="number"
            id="priceInXTZ"
            name="priceInXTZ"
            step="0.01"
            value={formData.priceInXTZ}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SellForm;
