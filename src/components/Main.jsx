export const Main = (props) => {
    const{data}=props;
    return (
        <div className='imgContainer'>
            <img src={data.hdurl} alt={data.title || 'img here lol'}className='bgImage'/>

        </div>
    )
}