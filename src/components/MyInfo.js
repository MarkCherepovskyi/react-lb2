import './MyInfo.css'
import MyList from "./MyList"

function MyInfo () {
    const items = ['Греция', 'Крым', 'Магистратура'];
  return (
    <div className="my-info">
        <div className='my-info__body'>
            <h1 className='my-info__body-title'>Марк</h1>
            <p className='my-info__body-about-me'>Короткий рассказ о себе</p>
            <MyList className='my-info__body-list' items={items} ></MyList>
        </div>
    </div>
  )
}

export default MyInfo;
