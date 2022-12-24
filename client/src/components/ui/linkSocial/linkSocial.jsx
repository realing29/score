import style from './linkSocial.module.sass'

const LinkSocial = ({ href, ico, alt }) => {
	return (
		<a target='_blank' href={href} className={style.social_link}>
			<img alt={alt} src={ico} className={style.social_link__ico} />
		</a>
	)
}

export default LinkSocial
