
const ManualEntry = ({manualData}) => {
         return (
            <div>
                <div className="border border-gray-300 px-4 mb-2 ms-4 me-2 py-2 rounded-md">
                  <p className="text-lg ms-4 font-medium">
                    Manual Stock Update
                  </p>
                  <p className="text-sm text-gray-400 ms-4 mb-3">
                    Enter product details and new stock levels manually
                  </p>
                  <form className="grid grid-cols-1 gap-6 ms-4 me-3 sm:grid-cols-2">
                    <div>
                      <label className="font-sm">Product ID or SKU</label>
                      <input
                        type="text"
                        placeholder="Enter product ID or SKU"
                        className="w-full px-3 py-2 mt-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="mb-2 font-sm">Adjustment Type</label>
                      <select className="w-full px-3 py-2 mt-2 border border-gray-400 text-gray-400 rounded-md">
                        <option>Set Stock</option>
                        <option>Increase</option>
                        <option>Decrease</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 font-sm">Quantity</label>
                      <select className="w-full px-3 py-2 mt-2 border border-gray-400 text-gray-400 rounded-md">
                        <option>1</option>
                        <option>5</option>
                        <option>10</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 font-sm">Reason</label>
                      <select className="w-full px-3 py-2 mt-2 border border-gray-400 text-gray-400 rounded-md">
                        <option>Purchase</option>
                        <option>Return</option>
                        <option>Damage</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="font-sm">Notes</label>
                      <textarea
                        placeholder="Add any additional note here…"
                        className="w-full px-3 py-2 mt-2 border border-gray-400 rounded-md"
                      ></textarea>
                    </div>
                    </form>
                    <div className="flex justify-end me-4">
                    <button className="bg-black text-white px-4 mt-2 py-2 rounded-md">
                      Add to Batch
                    </button>
                  </div>
                </div>

                <div className="border border-gray-300 ms-4 me-2 mb-4 mt-6 px-4 py-2 rounded-md ">
                  <p className="text-lg ms-4 font-medium">CSV Preview</p>
                  <p className="text-sm text-gray-400 ms-4 mb-3">
                    Review your data before updating inventory
                  </p>

                  <div className="overflow-x-auto border ms-3 me-2 border-gray-300 rounded-md">
                    <table className="min-w-full text-left text-sm text-gray-400">
                      <thead className="text-sm text-gray-400 ms-4 mb-3">
                        <tr>
                          <td className="px-4 py-3">Product Id</td>
                          <td className="px-4 py-3">SKU</td>
                          <td className="px-4 py-3">Adjustment</td>
                          <td className="px-4 py-3">Quantity</td>
                          <td className="px-4 py-3">Reason</td>
                          <td className="px-4 py-3">Actions</td>
                        </tr>
                      </thead>
                      <tbody className="text-black">
                        {manualData.map((item, idx) => (
                          <tr key={idx} className="border-gray-300 border-t">
                            <td className="px-4 py-3">{item.productId}</td>
                            <td className="px-4 py-3">{item.sku}</td>
                            <td className="px-4 py-3">{item.Adjustment}</td>
                            <td className="px-4 py-3">{item.Quantity}</td>
                            <td className="px-4 py-3">{item.Reason}</td>
                            <td className="px-4 py-3">{item.Actions}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between ms-4 mb-3 me-2 mt-4 gap-3 sm:gap-0">
                    <button className="text-black border border-gray-300 px-4 py-2 rounded-md hover:shadow w-full sm:w-auto">
                      Cancel Batch
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:shadow w-full sm:w-auto">
                      Process Batch Update
                    </button>
                  </div>
                </div>
            </div>
        )
};
export default ManualEntry;