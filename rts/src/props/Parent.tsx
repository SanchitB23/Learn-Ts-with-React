import {ChildAsFC} from './Child';


const Parent = () => {
    return <ChildAsFC color="yellow" onClick={() => {
        console.log("Clicked")
    }}>
        Hello
    </ChildAsFC>
}
export default Parent;
