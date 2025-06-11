
const BarcodeScan = ({barcodeScan}) => {
         return (
            <div>
                <div className="border border-gray-300  px-4 py-2 rounded-md hover:shadow mx-4">
                  <p className="text-lg ms-4 font-medium">Barcode Scanning</p>
                  <p className="text-sm text-gray-400 ms-4 mb-3">
                    Scan product barcodes to quickly update inventory
                  </p>

                  <div className="border border-dashed  mb-6 border-#CDCDCD px-3 py-2 rounded-md hover:shadow mx-4">
                    <div className="flex flex-col items-center  justify-center mt-6">
                      <div className="relative w-30 mb-3 h-15 bg-gray-200 flex items-center justify-center"></div>
                      <p className="text-lg ms-4 font-medium">Scan a barcode</p>
                      <p className="text-sm text-gray-400 mb-5">
                        Use a barcode scanner or enter the code manually
                      </p>
                      <button className="border border-2 border-gray-400 mb-4 text-gray-300  items-center  px-3 py-1  text-sm hover:shadow">
                        Scan or Enter Barcode
                      </button>
                    </div>
                  </div>
                  <form className="grid grid-cols-1 ms-4 me-3 sm:grid-cols-2 gap-6">
                    <div className="mb-3">
                      <label className="mb-2 font-sm ">Adjustment Type</label>
                      <select className="w-full px-3 py-2 mt-2 border border-gray-400 text-gray-400 rounded-md ">
                        <option>Set Stock</option>
                        <option>Increase</option>
                        <option>Decrease</option>
                      </select>
                    </div>
                    <div>
                      <label className=" mb-2 font-sm ">Quantity</label>
                      <select className="w-full px-3 py-2 mt-2 border text-gray-400 border-gray-400 rounded-md ">
                        <option>1</option>
                        <option>5</option>
                        <option>10</option>
                      </select>
                    </div>
                  </form>
                  <div className="ms-4 me-3">
                    <label className=" mb-2 font-sm ">Reason</label>
                    <select className="w-full  px-3 py-2  mt-2 border text-gray-400 border-gray-400 rounded-md ">
                      <option>Purchase</option>
                      <option>Return</option>
                      <option>Damage</option>
                    </select>
                  </div>

                  <div className="flex justify-between ms-4 m-2 mt-5">
                    <button className="text-black border border-gray-300 px-4 py-2 rounded-md hover:shadow">
                      Reset
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:shadow">
                      Update Stock
                    </button>
                  </div>
                </div>

                <div className="border border-gray-300 px-4 py-2 mt-5 mb-4rounded-md hover:shadow mx-4">
                  <p className="text-lg ms-4 font-medium">Scan History</p>
                  <p className="text-sm text-gray-400 ms-4 mb-3">
                    Recent scanned items in this session
                  </p>
                  <div className="overflow-x-auto border ms-3 me-2 mb-3 border-gray-300 rounded-md">
                    <table className="min-w-full text-left text-sm text-gray-400">
                      <thead className="text-sm text-gray-400 ms-4 mb-3">
                        <tr>
                          <td className="px-4 py-3">Time</td>
                          <td className="px-4 py-3">Barcode</td>
                          <td className="px-4 py-3">Product</td>
                          <td className="px-4 py-3">Adjustment</td>
                          <td className="px-4 py-3">Quantity</td>
                          <td className="px-4 py-3">Status</td>
                        </tr>
                      </thead>
                      <tbody className="text-black">
                        {barcodeScan.map((item, index) => (
                          <tr key={index} className="border-gray-300 border-t">
                            <td className="px-4 py-3">{item.Time}</td>
                            <td className="px-4 py-3">{item.Barcode}</td>
                            <td className="px-4 py-3">{item.Product}</td>
                            <td className="px-4 py-3">{item.Adjustment}</td>
                            <td className="px-4 py-3">{item.Quantity}</td>
                            <td className="px-4 py-3">{item.Status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
         )}
export default BarcodeScan; 
