import createAppContext from '~/utils/context/createContext'
import { User } from '../schema'

type IContext = {
	user: Partial<User>;
}

export const { Provider, useStore } = createAppContext<IContext>({ user: {} })