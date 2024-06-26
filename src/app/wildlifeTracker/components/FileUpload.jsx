import React, { useState, useRef } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { getFileSize } from "../util/fileSize";

const FileUpload = ({ file, setFile }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef();

  const checkFileValidity = (file) => {
    if (file) {
      const allowedFileTypes = ["mp4", "mov", "avi"];
      const fileType = file.name.split(".").pop().toLowerCase();

      if (!allowedFileTypes.includes(fileType)) {
        alert("The uploaded file type is not supported.");
        return false;
      }
      return true;
    }
    return;
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file && checkFileValidity(file)) {
      setFile(file);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  const onDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && checkFileValidity(uploadedFile)) {
      setFile(uploadedFile);
    }
    setIsDragOver(false);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center mb-8">
        <div className="flex flex-col w-full md:w-5/6 justify-center gap-8">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-center text-gray-800">
              Upload a file
            </p>
            <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
          </div>
          <div className="flex flex-col gap-2 mx-4">
            <div
              className={`flex flex-col w-full h-full justify-center items-center border-2 border-dashed border-green-500 border-opacity-50 py-6 rounded-lg ${
                isDragOver ? "bg-neutral-100" : ""
              }`}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              <div className="flex flex-col w-full md:w-5/6 justify-center items-center gap-12">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <CloudArrowUpIcon className="h-12 w-12 text-green-600 mb-2" />
                    <p className="text-md font-semibold text-center text-gray-800">
                      Drag and drop to upload the file or
                    </p>
                  </div>
                  <div>
                    <button
                      className="bg-white text-md text-green-600 border border-green-600 font-semibold rounded-md px-4 py-2 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
                      onClick={onButtonClick}
                    >
                      Browse Computer
                    </button>
                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={onFileChange}
                      accept=".mov,.mp4"
                    />
                  </div>
                </div>
                <div>
                  <ul className="list-disc list-inside">
                    <li className="text-xs text-neutral-400">
                      You can upload .mov or .mp4 files
                    </li>
                    <li className="text-xs text-neutral-400">
                      Maximum file size is 150MB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-400">
                By uploading a file you agree to the{" "}
                <span className="text-green-500 cursor-pointer hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-green-500 cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
          {file && (
            <div className="flex flex-row justify-center">
              <div className="flex flex-row w-full py-2 px-4 mx-4 justify-between bg-neutral-100 rounded-lg">
                <div className="flex flex-col items-start sm:flex-row sm:gap-4 sm:items-center">
                  <p className="text-sm font-semibold text-center text-gray-800">
                    {file.name}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {getFileSize(file.size)}
                  </p>
                </div>
                <div
                  className="w-8 h-8 rounded-full cursor-pointer hover:bg-white p-2"
                  title="Remove file"
                  onClick={() => setFile(null)}
                >
                  <svg
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
