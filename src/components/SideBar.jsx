export const SideBar = (props) => {
    const { handleShowModal ,data} = props;
    return (

        <div className='sidebar'>
            <div onClick={handleShowModal} className='bgOverlay'></div>
             <div className='sidebarContents'>


            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
                 <button onClick={handleShowModal}>
                     <i className="fa-solid fa-right-long"></i>
                 </button>
             </div>
        </div>
    )
}
