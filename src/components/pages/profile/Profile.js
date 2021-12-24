import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/pic1.jpeg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Rohit Singh Sagar' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Rohit Singh Sagar
					</span>
					<p>Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
					<a href="https://www.facebook.com/sagarohit/"><i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i></a>	
						<a href='https://twitter.com/Rohit_Baghel16'>	<i className='fab fa-twitter grey-text text-darken-4 social_style'></i></a>
						<a href='https://www.linkedin.com/in/rohit-singh-sagar-0702b918b/'><i className='fab fa-linkedin grey-text text-darken-4 social_style'></i></a>
						<a href='https://www.instagram.com/rohit_baghel_world/'><i className='fab fa-instagram grey-text text-darken-4 social_style'></i></a>
						<a href='https://in.pinterest.com/sagarohit15/'>	<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i></a>	
					
					</p>
				</div>
			</div>
		</div>
	);
}
