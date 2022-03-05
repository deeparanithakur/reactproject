function Song(props){
    return(
         
         <div>
             <p>{props.name} : {props.year} : {props.artistName}</p>
        </div>
    )
}

export default Song;