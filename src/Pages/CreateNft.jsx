import React, { useState } from "react";
import { FiUpload, FiX, FiFile } from "react-icons/fi";

const CreateNft = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFile({
          data: e.target.result,
          type: selectedFile.type,
        });
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  const removeFile = (e) => {
    e.preventDefault();
    setFile(null);
  };

  return (
    <div>
      <div className="pt-[100px] flex justify-between px-5">
        <div className="max-w-md mx-auto mt-8">
          <div className="font-bold text-lg mb-2">Upload file</div>
          <div>Drag or choose your file to upload</div>
          <label
            htmlFor="fileInput"
            className="border-dotted  border-2 border-gray-300 p-16 mt-2 cursor-pointer flex items-center relative"
          >
            <FiUpload className="mr-2" /> {/* Upload icon */}
            <span>Choose or Drag a File</span>
            <input
              id="fileInput"
              className="hidden"
              type="file"
              accept="image/*, application/pdf"
              onChange={handleFileChange}
            />
            {file && (
              <div className="flex items-center">
                {file.type.startsWith("image/") ? (
                  <img className="h-[20px] w-[20px] ml-2" src={file.data} alt="Uploaded File" />
                ) : (
                  <a className="ml-2" href={file.data} target="_blank" rel="noopener noreferrer">
                    <FiFile /> PDF
                  </a>
                )}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-full"
                  onClick={removeFile}
                >
                  <FiX />
                </button>
                
              </div>
            )}
          </label>
          <div className="mt-4">
            <div className="font-bold">Note:</div>
            <div>Service fee: 2.5%</div>
            <div>You will receive: 25.00 ETH $50,000</div>
          </div>
        </div>

        <div className="border rounded-md w-[50%] p-[80px]">
          <div className="pt-3">
            <div className="mb-2">Product Name</div>
            <div>
              <input
                className="border rounded-md shadow-md w-[600px] h-[50px] px-3"
                placeholder="e. g. `Digital Awesome Game`"
              />
            </div>
          </div>
          <div className="pt-3">
            <div className="mb-2">Discription</div>
            <div>
              <textarea
                className="border rounded-md shadow-md w-[600px] h-[100px] px-3"
                placeholder="e. g. “After purchasing the product you can get item...”"
              />
            </div>
          </div>
          <div className="pt-3 flex justify-between">
            <div>
              <div className="mb-2">Item Price in $</div>
              <div>
                <input
                  className="border rounded-md shadow-md w-[180px] h-[40px] px-3"
                  placeholder="e. g. `20$`"
                />
              </div>
            </div>
            <div>
              <div className="mb-2">Size</div>
              <div>
                <input
                  className="border rounded-md shadow-md w-[180px] h-[40px] px-3"
                  placeholder="e. g. `Size`"
                />
              </div>
            </div>
            <div>
              <div className="mb-2">Properties</div>
              <div>
                <input
                  className="border rounded-md shadow-md w-auto h-[40px] px-3"
                  placeholder="e. g. `Properties`"
                />
              </div>
            </div>
          </div>
          <div className="pt-3">
            <div className="mb-2">Royality</div>
            <div>
              <input
                className="border shadow-md w-[600px] h-[50px] px-3"
                placeholder="e. g. `20%`"
              />
            </div>
          </div>
          <div className="pt-3 flex flex-wrap justify-between">
            <div className="flex gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div className="mb-2">Put on Sale</div>
            </div>
            <div className="flex gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div className="mb-2">Instant Sale Price</div>
            </div>
            <div className="flex gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div className="mb-2">Unlock Purchased</div>
            </div>
          </div>
          <div className="pt-3 flex justify-between">
            <div className="border p-4 text-center w-[150px] rounded-md bg-[#00a3ff] text-white hover:bg-black ">
              Preview
            </div>
            <div className="border text-center w-[400px] p-4 rounded-md bg-black text-white hover:bg-[#00a3ff] ">
              Submit item
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
