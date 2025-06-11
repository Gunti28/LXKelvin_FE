<<<<<<< HEAD

=======
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
import React, { useState } from "react";
import { FaFileImport } from "react-icons/fa6";
import ProductFilters from "./ProductFilters";
import ProductData from "./ProductsData";
import AddNew from "./AddNewRecordModel/AddNewRecord";

const ProductPage = () => {
<<<<<<< HEAD
const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ">
        <div className="sm:gap-0">
          <p className="lg:text-3xl font-semibold sm:text-base">
            Product Management
          </p>
        </div>
=======
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="lg:text-3xl font-semibold sm:text-base">
          Product Management
        </p>

>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
        <div className="flex items-center gap-5 sm:mt-0 mt-2 mr-5">
          <button className="px-4 py-2 text-sm bg-white border rounded hover:bg-gray-100 sm:px-2 sm:py-1 sm:text-xs flex items-center gap-2">
            Export <FaFileImport />
          </button>
<<<<<<< HEAD
          <button    onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-indigo-700 sm:px-2 sm:py-1 sm:text-xs">
=======
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-indigo-700 sm:px-2 sm:py-1 sm:text-xs"
          >
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
            + Add Product
          </button>
        </div>
      </div>

<<<<<<< HEAD
      <div>
        <ProductFilters />
      </div>

      <div>
        <ProductData/>
      </div>

     
=======
      <ProductFilters />
      <ProductData />

>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
      <AddNew isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
    </div>
  );
};

export default ProductPage;
