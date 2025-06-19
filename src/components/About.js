export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#343a40',
        backgroundColor: props.mode === 'dark'?'rgb(78 94 110)':'white',
    };

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#343a40'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils helps you quickly analyze and transform your text, making it easier to format, count words, check reading time, and improve your writing efficiency—all in one simple tool!
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is completely free to use, providing a range of text manipulation features without any cost, making it accessible for everyone to enhance their writing and text analysis tasks.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is designed to be compatible with all major browsers, ensuring a seamless user experience across platforms like Chrome, Firefox, Safari, and Edge, allowing users to access its features effortlessly.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
