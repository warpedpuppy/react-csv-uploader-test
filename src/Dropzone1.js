
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function Dropzone1() {

  const onDrop = useCallback((acceptedFiles) => {

	const fileReader = new FileReader();

	fileReader.onabort = () => console.log('file reading was aborted')
	fileReader.onerror = () => console.log('file reading has failed')
	fileReader.onload = () => {

        const loaded_csv = fileReader.result;
        console.log("loaded_csv", loaded_csv)
		let arr = loaded_csv.split(",")
		console.log(arr)
      }
      fileReader.readAsText(acceptedFiles[0])

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default Dropzone1;