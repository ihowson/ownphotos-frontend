export const calculateGridCells = (groupedByDateList,itemsPerRow) => {
    var gridContents = []
    var rowCursor = []
    var hash2row = {}
  
    groupedByDateList.forEach((day)=>{
      gridContents.push([day])
      var currRowIdx = gridContents.length
      day.photos.forEach((photo,idx)=>{
        if (idx === 0 ) {
          rowCursor = []
        }
        if (idx > 0 && idx % itemsPerRow === 0) {
          gridContents.push(rowCursor)
        }
        if (idx % itemsPerRow === 0) {
          rowCursor = []
        }
        rowCursor.push(photo)
        hash2row[[photo.image_hash]] = currRowIdx
        if (idx === day.photos.length-1) {
          gridContents.push(rowCursor)        
        }
  
      })
    })
    return {cellContents:gridContents,hash2row:hash2row}
  }
  

export const calculateGridCellSize = (gridWidth) => {
    var numEntrySquaresPerRow
    
    if (gridWidth < 600) {
        numEntrySquaresPerRow = 2
    } 
    else if (gridWidth < 800) {
        numEntrySquaresPerRow = 3
    }
    else if (gridWidth < 1000) {
        numEntrySquaresPerRow = 5
    }
    else if (gridWidth < 1200) {
        numEntrySquaresPerRow = 7
    }
    else {
        numEntrySquaresPerRow = 8 
    }

    var entrySquareSize = gridWidth / numEntrySquaresPerRow
    var numEntrySquaresPerRow = numEntrySquaresPerRow

    return {
        entrySquareSize: entrySquareSize,
        numEntrySquaresPerRow: numEntrySquaresPerRow
    }

}




export const calculateFaceGridCells = (groupedByPersonList,itemsPerRow) => {
    var gridContents = []
    var rowCursor = []
    var hash2row = {}
  
    groupedByPersonList.forEach((person)=>{
      gridContents.push([person])
      var currRowIdx = gridContents.length
      person.faces.forEach((face,idx)=>{
        if (idx === 0 ) {
          rowCursor = []
        }
        if (idx > 0 && idx % itemsPerRow === 0) {
          gridContents.push(rowCursor)
        }
        if (idx % itemsPerRow === 0) {
          rowCursor = []
        }
        rowCursor.push(face)
        hash2row[[face.image_hash]] = currRowIdx
        if (idx === person.faces.length-1) {
          gridContents.push(rowCursor)        
        }
  
      })
    })
    return {cellContents:gridContents,hash2row:hash2row}
  }




export const calculateFaceGridCellSize = (gridWidth) => {
    var numEntrySquaresPerRow
    if (gridWidth < 300) {
        numEntrySquaresPerRow = 2
    }     
    else if (gridWidth < 600) {
        numEntrySquaresPerRow = 3
    } 
    else if (gridWidth < 800) {
        numEntrySquaresPerRow = 4
    }
    else if (gridWidth < 1000) {
        numEntrySquaresPerRow = 6
    }
    else if (gridWidth < 1200) {
        numEntrySquaresPerRow = 8
    }
    else {
        numEntrySquaresPerRow = 10
    }

    var entrySquareSize = gridWidth / numEntrySquaresPerRow
    var numEntrySquaresPerRow = numEntrySquaresPerRow

    return {
        entrySquareSize: entrySquareSize,
        numEntrySquaresPerRow: numEntrySquaresPerRow
    }

}