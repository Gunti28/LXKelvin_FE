import { Dialog, Tab, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import BasicInfoTab from "./BasicInfoTab";
import PricingTab from "./PricingTab";
import InventoryTab from "./InventoryTab";
import ImagesTab from "./ImagesTab";

const AddNew = ({ isOpen, setIsOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const initialFormData = {
    name: "",
    sku: "",
    brand: "",
    description: "",
    tags: [],
    category: "",
    status: "Active",
    pricing: {
      regular: "",
      sale: "",
      taxSetting: "Standard Rate",
      taxExempt: false,
      onSale: false,
    },
    inventory: {
      stockQty: "",
      lowStockThreshold: "",
      manageStock: false,
      stockStatus: "In Stock",
    },
    images: {
      main: null,
      gallery: [],
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (section, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Product:", formData);
    setIsOpen(false);
    setFormData(initialFormData);
    setSelectedIndex(0);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-sm text-gray-900">
                  Add Product
                </Dialog.Title>
                <p className="mt-2 text-sm text-gray-600 text-left">
                  Fill out the form below to add a new product to your
                  inventory.
                </p>

                <Tab.Group
                  selectedIndex={selectedIndex}
                  onChange={setSelectedIndex}
                >
                  <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mt-4">
                    {["Basic Info", "Pricing", "Inventory", "Images"].map(
                      (tab) => (
                        <Tab
                          key={tab}
                          className={({ selected }) =>
                            `w-full rounded py-2 text-sm font-medium text-black ${
                              selected
                                ? "bg-white text-black"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                            }`
                          }
                        >
                          {tab}
                        </Tab>
                      )
                    )}
                  </Tab.List>

                  <Tab.Panels className="mt-2">
                    <Tab.Panel>
                      <BasicInfoTab
                        data={formData}
                        onChange={handleChange}
                        onSave={handleSave}
                        onCancel={() => setIsOpen(false)}
                      />
                    </Tab.Panel>

                    <Tab.Panel>
                      <PricingTab
                        data={formData.pricing}
                        onChange={(field, value) =>
                          handleChange("pricing", {
                            ...formData.pricing,
                            [field]: value,
                          })
                        }
                        onSave={handleSave}
                        onCancel={() => setIsOpen(false)}
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <InventoryTab
                        data={formData.inventory}
                        onChange={(field, value) =>
                          handleChange("inventory", {
                            ...formData.inventory,
                            [field]: value,
                          })
                        }
                        onSave={handleSave}
                        onCancel={() => setIsOpen(false)}
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <ImagesTab
                        data={formData.images}
                        onChange={(field, value) =>
                          handleChange("images", {
                            ...formData.images,
                            [field]: value,
                          })
                        }
                        onSave={handleSave}
                        onCancel={() => setIsOpen(false)}
                      />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddNew;
