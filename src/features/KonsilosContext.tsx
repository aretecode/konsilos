import * as React from 'react'
import { createContext } from 'react'
import {
  KonsilosStoreType,
  AdviceItemType,
  FamilyMemberItemType,
} from '../typings'
import { useAdviceState } from './Advice/useAdviceState'
import { useFamilyState } from './Family/useFamilyState'

export type KonsilosContextType = KonsilosStoreType & {
  setAdviceList: (list: AdviceItemType[]) => void
  setFamilyList: (list: FamilyMemberItemType[]) => void
}
export const KonsilosContext = createContext<KonsilosContextType>({
  user: undefined,
  familyList: [],
  adviceList: [],
} as any)

export const KonsilosContextProvider = (props: {
  children: React.ReactNode
}) => {
  const [adviceList, setAdviceList] = useAdviceState()
  const [familyList, setFamilyList] = useFamilyState()

  const { children } = props
  const contextValue = {
    user: undefined as any,
    familyList,
    adviceList,
    setAdviceList,
    setFamilyList,
  }
  return (
    <KonsilosContext.Provider value={contextValue}>
      {children}
    </KonsilosContext.Provider>
  )
}
