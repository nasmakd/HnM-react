//반응형, 사이드바 추가
import React, { useState } from 'react';
import { SlUser } from 'react-icons/sl';
import { CiSearch, CiLogout } from 'react-icons/ci';
import { VscClose, VscMenu } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ authenticate, setAuthenticate }) => {
	const [sideState, setSideState] = useState('-100%');
	//sidebar의 left 상태
	const navigate = useNavigate();
	const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', '스포츠', 'Sale', '지속가능성'];
	const search = (event) => {
		if (event.key === 'Enter') {
			// 엔ㄴ터키만 눌렀을 때 반응
			let keyword = event.target.value; //js와 다름 event 안에 value가 들어 있음
			// console.log(keyword)
			navigate(`/?q=${keyword}`); //추가 조건을 쿼리로 붙임, 키워드 읽어와서 url에 넣어줌
		}
	};
	const gotoLogin = () => {
		//authenticate가 false
		navigate('/login'); //login 페이지로 이동
	};
	return (
		<div>
			<div className="side_menu" style={{left:sideState}}>
				<div className="closeBtnWrap">
					<VscClose className="closeBtn" onClick={()=>{setSideState('-100%')}}/>
				</div>
				<ul className="side_menu_list">
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>
			</div>
			<div className="burger_menu hide">
				<VscMenu onClick={()=>{setSideState('0')}} />
			</div>
			<div className='login_btnWrap'>
				{authenticate ? (
					<div className='login_btn' onClick={() => setAuthenticate(false)}>
						<CiLogout /> <span>로그아웃</span>
					</div>
				) : (
					<div className='login_btn' onClick={gotoLogin}>
						<SlUser /> <span>로그인</span>
					</div>
				)}
			</div>
			<h1>
				<Link to='/'>
					<div className='img_wrap'>
						<img width='90' src='/img/Logo.png' alt='H&M' />
					</div>
				</Link>
			</h1>
			<nav>
				<ul className='menu-list'>
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>
				<div className='search'>
					<CiSearch />
					<input type='text' placeholder='제품검색' onKeyPress={(event) => search(event)} />
				</div>
			</nav>

		</div>
	);
};

export default Navbar;

// yarn add react-icons
// yarn add sass
