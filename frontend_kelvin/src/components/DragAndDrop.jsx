import React, { useCallback, useState,useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "@iconify/react";

const DragAndDrop = ({ clearPreview }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles || acceptedFiles.length === 0) return;
    const mappedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...mappedFiles]); 
  }, []);

  useEffect(() => {
    if (clearPreview !== undefined) {
      setFiles([]);
    }
  }, [clearPreview]);
  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #9A9A9A",
        borderRadius:"12px",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "10px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: files.length > 0 ? "flex-start" : "center",
        gap: "10px",
      }}

    >
      <input {...getInputProps()} />
      
      {files.length === 0 ? (
        <>
        <Icon
                  icon="iconamoon:file-add-thin"
                  width="26.84"
                  height="34.5"
                />
        <p>Drag and drop your files here</p>
        <p style={{ color: "#9A9A9A", marginBottom: "1%" }}>or</p>

        <label
          className="mb-2"
          style={{
            cursor: "pointer",
            padding: "8px 16px",
            backgroundColor: "#002072",
            fontSize: "14px",
            color: "white",
            border: "none",
            borderRadius: "12px",
            display: "inline-block",
          }}
        >
          Browse Files
        </label>
        </>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {files.map((file, index) => (
            <div key={index} style={{ textAlign: "center", position: "relative" }}>
              {file.type.startsWith("image/") ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  width="100"
                  style={{ borderRadius: "5px", objectFit: "cover" }}
                />
              ) : (
                <span>{file.name}</span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.name);
                }}
                style={{
                  position: "absolute",
                  top: "-7px",
                  right: "-7px",
                  background: "darkred",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  cursor: "pointer",
                  justifyContent:"center",
                  fontSize: "6px",
                  lineHeight: "10px",
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;