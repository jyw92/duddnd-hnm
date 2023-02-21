import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';



const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  const navigate = useNavigate()
  const goToLogin = ()=>{
    if(authenticate === true){
      setAuthenticate(false)
    }
    navigate('/login')
  }
  const search = (event) => {
    if(event.key === "Enter"){
      //입력한 검색어를 읽어와서
      let keyword = event.target.value
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  }
  const homeGo = () =>{
    navigate('/')
  }
  console.log('authenticate', authenticate)
  return (
    <div className='nav-container'>
      <div className='login-section'>
        <button type='button' className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={ faUser } />
          {
              authenticate === true ? '로그아웃' : '로그인'
          }
        </button>
      </div>
      <div className='logo-section'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt=""  width={100} onClick={homeGo}/>
      </div>
      <div className='nav-section'>
        <ul>
          {
            menuList.map((itm, idx) =>(
              <li key={idx}>
                {itm}
              </li>
            ))
          }
        </ul>
        <div className='search'>
          <button type='button'><FontAwesomeIcon icon={ faSearch } /></button>
          <input type="search" placeholder="검색어를 입력해주세요." onKeyPress={search}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
