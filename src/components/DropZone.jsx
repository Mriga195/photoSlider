import React from 'react'
import SparkMD5 from 'spark-md5'
import "./DropZone.css"

const dummy_data = [
  {
    id: 1,
    src: "picsum.photos/150",
    filename: "placeholder_1",
    caption: "auto_caption_1",
    customCaption: "user_provided_caption_1"
  },
  {
    id: 2,
    src: "picsum.photos/160",
    filename: "placeholder_2",
    caption: "auto_caption_2",
    customCaption: "user_provided_caption_2"
  },
  {
    id: 3,
    src: "picsum.photos/154",
    filename: "placeholder_3",
    caption: "auto_caption_3",
    customCaption: "user_provided_caption_3"
  },
  {
    id: 4,
    src: "picsum.photos/145",
    filename: "placeholder_4",
    caption: "auto_caption_4",
    customCaption: "user_provided_caption_4"
  },
]

const createCaption = (file) => {
    const filename = file.substr(0, file.lastIndexOf("."))

    const name = filename.replace("-", " ").split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")

    return name;
}

const getFileId = async (file) => {
    const buffer = await file.arrayBuffer()

    return SparkMD5.ArrayBuffer.hash(buffer)
}

const DropZone = ({setPhotos, photos}) => {

    const handleDrop = async (e) => {
        e.preventDefault()

        const files = Array.from(e.dataTransfer.files);

        const client_photos = files.filter(file => {
            return file.type.startsWith("image/")
        })

        const photoArr = await Promise.all(client_photos.map(async photo => {
            const id = await getFileId(photo)
            return {
                id,
                caption: createCaption(photo.name),
                file_name: photo.name,
                src: URL.createObjectURL(photo)
            }
        }))

        const updatedPhotos = photoArr.filter(new_photo => {
            return !photos.some(stored_photo => stored_photo.id === new_photo.id)
        })

        setPhotos([...photos, ...updatedPhotos])
    }


  return (
    <div className='drop-zone'>
        <div className="drop-box" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>Drop here</div>
        <button className="load-btn" onClick={() => setPhotos(dummy_data)}>Load Sample photos</button>
    </div>
  )
}

export default DropZone
