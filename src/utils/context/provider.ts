import createAppContext from '~/utils/context/createContext'
import { UserData } from '../schema'

type IContext = {
	user: UserData;
}

export const { Provider, useStore } = createAppContext<IContext>({ user: { username: 'world' } })

