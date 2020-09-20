import { useContext, createContext } from 'react'

const TagNameContext = createContext(null)

export const TagNameProvider = TagNameContext.Provider
export default () => useContext(TagNameContext) || null
