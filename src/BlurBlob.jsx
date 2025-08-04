import PropTypes from "prop-types"


function BlurBlob({position, size}) {
    const {top,left} = position
    const {height, width} = size
  return (
    <div className='absolute'
    style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)'
    }}
    >
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'>

        </div>
    </div>
  )
}

//define prop types
BlurBlob.PropTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string
    })
}
export default BlurBlob