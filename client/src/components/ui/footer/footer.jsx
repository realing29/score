import { Link } from 'react-router-dom'
import LinkSocial from '../linkSocial'
import style from './footer.module.sass'

const Footer = () => {
	const socialLinks = [
		{
			href: 'https://github.com/realing29',
			alt: 'github',
			ico: '/assets/github.ico',
		},
		{
			href: 'https://t.me/realing29',
			alt: 'telegram',
			ico: '/assets/telegram.ico',
		},
		{
			href: 'https://vk.com/hash_buy_yourself',
			alt: 'vk',
			ico: '/assets/vkontakte.ico',
		},
		{
			href: 'https://discordapp.com/users/443095421506551809',
			alt: 'discord',
			ico: '/assets/discord.ico',
		},
		{
			href: 'mailto:realing29@gmail.com?subject=Письмо с вашего сайта&body=Привет, Роман!',
			alt: 'gmail',
			ico: '/assets/gmail.ico',
		},
	]
	return (
		<div className={style.container_footer}>
			<div className={style.footer}>
				<Link to={'/terms'} className={style.footer__terms_link}>
					Пользовательское соглашение
				</Link>
				<div className={style.footer__social_container}>
					{socialLinks.map((item, i) => (
						<LinkSocial key={'linkSocial' + i} {...item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Footer
