import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "@iconify/react";
import styles from "../css/DragAndDrop.module.css"; // CSS Module import

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
      className={`${styles.dropzoneContainer} ${files.length > 0 ? styles.withFiles : ""}`}
    >
      <input {...getInputProps()} />

      {files.length === 0 ? (
        <>
          <Icon icon="iconamoon:file-add-thin" width="26.84" height="34.5" />
          <p>Drag and drop your files here</p>
          <p className={styles.orText}>or</p>

          <label className={`mb-2 ${styles.browseFilesBtn}`}>Browse Files</label>
        </>
      ) : (
        <div className={styles.previewContainer}>
          {files.map((file, index) => (
            <div key={index} className={styles.filePreview}>
              {file.type.startsWith("image/") ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  width="100"
                  className={styles.previewImage}
                />
              ) : (
                <span>{file.name}</span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.name);
                }}
                className={styles.removeBtn}
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
