import { Button } from "antd";

function Btn(props){
    return(
        <>
        <Button onClick={props.modal} type="primary" style={{backgroundColor:'lightblue', padding:'20px 30px', fontSize:'1.5rem', fontWeight:'500'}}>Click</Button>
        </>
    )
}
export default Btn