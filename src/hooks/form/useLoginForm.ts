import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import { useNotification } from '../../context/NotificationProvider'

interface LoginInputs {
  email: string
  password: string
}
export const useLoginForm = () => {
  const navigate = useNavigate()
  const { singin } = useAuth()
  const { addNotification } = useNotification()

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }: LoginInputs) => {
      const isLogged = await singin(email, password)
      if (!isLogged) {
        addNotification({
          type: 'error',
          message: 'Неправильна пошта або пароль',
        })
        return
      }
      addNotification({
        type: 'success',
        message: 'Ви успішно авторизовані',
      })
      navigate('/')
    },
  })

  return {
    handleSubmit,
    handleChange,
    values,
  }
}
