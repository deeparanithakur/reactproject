import './Contact.css';
let  Contact = props =>

      

        <div className ='divStyle'>
          <p>
            <span style  = {{color:'blueviolet', fontSize:'25px'}}>
                {props.name}
            </span> : 
            <span style ={{padding:'10px',color:'maroon'}}>
                {props.mobile}
            </span>
           </p>
        </div>

export default Contact



/*/////line 1 is in ES 6
////function Contact(props) {
   //// return 
   ////)
   ///}
   ////line 3 in in ES5.since there is only one 
///property ,{} n return are optional.*/


////here above divStyle is object
/// margin- : here -(hyphen) in css , all becomes camel case in react js.
//ex marginBottom
