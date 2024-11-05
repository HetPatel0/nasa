export const Footer = (props) => {
    const {handleShowModal,data} =props
    return (
       <footer>
           <div className='bgGradient'>
               <h1>APOD PROJECT</h1>
               <h2> {data?.title} </h2>

           </div>
           <button onClick={handleShowModal}>
               <i className="fa-solid fa-circle-info"></i>

           </button>

       </footer>
    )
}
