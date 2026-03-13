import React, { useRef } from 'react'
import "./PhotoReordering.css"

const PhotoReordering = ({photos, setPhotos}) => {

    const dragItem = useRef(null);

    const handleDragStart = (dragIndex) => {
        dragItem.current = dragIndex
    }

    const handleReorder = (targetIndex) => {
        const copy = [...photos]

        const draggedElement = copy.splice(dragItem.current, 1)[0]
        copy.splice(targetIndex, 0, draggedElement)

        dragItem.current = null;

        setPhotos(copy)
    }



  return (
    <div className='reorder-wrapper'>
        <div className='thumbnail-wrapper'>
        {
            photos.map((photo, index) => (
                <div className="card" key={photo.id} draggable={true} onDragStart={() => handleDragStart(index)} onDragOver={e => e.preventDefault()} onDrop={() => handleReorder(index)}>
                    <img src={photo.src} alt={photo.file_name} />
                    <div className="caption">{photo.caption}</div>
                </div>
            ))
        }

        
        </div>
        {/* <button className="reorder-btn" onClick={() => setReorder(false)}>Done</button> */}
    </div>
  )
}

export default PhotoReordering
