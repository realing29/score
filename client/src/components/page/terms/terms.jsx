import style from './terms.module.sass'

const Terms = () => {
	return (
		<div className={style.terms}>
			<h1>Пользовательское соглашение</h1>
			<p>
				Продолжая пользоваться сайтом вы соглашаетесь с тем, что данный сайт не оказывает
				реальных услуг. Вся информация на сайте носит демонстрационный характер.
			</p>
			<p>
				Соглашаетесь с тем, что в демонстрационной версии сайта, считается нормальным,
				отсутсвие функций которые обычно присутсвуют на сайтах подобного рода. Например -
				подтверждение регистрации по E-mail, защита от накрутки отзывов и рейтинга товара,
				отсутсвие классификатора и валидации адреса при заполенении данных в профиле,
				отсутсвие возможности реальной оплаты товара.
			</p>

			<p>
				Соглашаетесь с тем что не будете оставлять непристойные комментарии, использовать
				непристойные логины, а так же любую другую информацию которую могут увидеть другие
				пользователи.
			</p>
			<p>
				Соглашаетесь с тем что будете следовать правилам морального поведения оставляя
				информацию на сайте которую могут увидеть другие пользователи.
			</p>
			<p>
				Владелец сайта не несет никакой ответственности за использование данного сайта.
			</p>
			<p>
				Если вы не согласны с правилами данного соглашения, пожалуйста, закройте сайт,
				прекратите его использование.
			</p>
			<p>Если вы дочитали до конца - улыбнитесь (:</p>
		</div>
	)
}

export default Terms
