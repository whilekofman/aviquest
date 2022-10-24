import './index.css'


const AvitarShow = ({open}) => {
    console.log(open);

    const avitarShow = (
        <div className="avitarShow">
            avitarshow here
        </div>
    )

    return open ? avitarShow : null
}
 
export default AvitarShow;