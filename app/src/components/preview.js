import React, { useRef, useEffect, useState } from "react"

const Preview = () => {
  const canvasRef = useRef()
  const ISBN_num = "0738531367"

  const [loaded, setLoaded] = useState(false)
  function alertNotFound() {
    alert("could not embed the book!")
  }

  useEffect(() => {
    const scriptTag = document.createElement("script")
    scriptTag.src = "https://www.google.com/books/jsapi.js"
    scriptTag.setAttribute("type", "text/javascript")
    scriptTag.addEventListener("load", () => setLoaded(true))
    scriptTag.id = "google-script"
    document.head.append(scriptTag)
  }, [])

  useEffect(() => {
    if (!loaded) return
    else {
      if (window.viewer) {
        console.log("Reuse window.viewer")
        let viewer = new google.books.DefaultViewer(canvasRef.current)
        viewer.load("ISBN:" + ISBN_num, alertNotFound)
      } else {
        console.log("About to load")
        google.books.load(() => {
          console.log("Callback")
          let viewer = new google.books.DefaultViewer(canvasRef.current)
          window.viewer = viewer
          viewer.load("ISBN:" + ISBN_num, alertNotFound)
          console.log("Viewer was initialzied")
        })
        console.log("Loaded")
      }
    }
  }, [loaded])

  return (
    <>
      {loaded ? (
        <div ref={canvasRef} id="previewCanvas"></div>
      ) : (
        "Script not loaded"
      )}
    </>
  )
}

export default Preview
