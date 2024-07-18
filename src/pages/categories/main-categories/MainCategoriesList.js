import React from 'react'
import { useSelector } from 'react-redux'

export default function MainCategoriesList() {

  const mainCategories = useSelector(store => store.mainCategories)
  return (
    <div>
        Main Categories List

        <div>
        {mainCategories.map(cat => cat.name)}
        </div>
      
    </div>
  )
}
