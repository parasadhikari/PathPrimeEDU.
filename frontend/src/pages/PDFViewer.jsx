import { useLocation } from "react-router-dom";

const PDFViewer = () => {

    const location = useLocation();

    const pdfUrl = new URLSearchParams(
        location.search
    ).get("url");

    return (

        <div className="w-full h-screen">

            <iframe
                src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`}
                title="PDF Viewer"
                width="100%"
                height="100%"
            />

        </div>

    );

};

export default PDFViewer;