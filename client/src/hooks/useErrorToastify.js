import { toast } from 'react-toastify'
import { useEffect } from 'react'

export default (isError, text = 'Произошла ошибка попробуйте позже', toastConfig) => {
	useEffect(() => {
		if (isError) toast(text, toastConfig)
	}, [isError])
}
