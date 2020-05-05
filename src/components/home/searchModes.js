import React from 'react'
import SwitchButton from './../uiComponents/switchButton';

const SearchModes = (props) => {

  const { onChange, checkedParent, checkedTeacher, checkedStudent } = props;
  const modes = [
    { label: 'Parent', checked: checkedParent },
    { label: 'Teacher', checked: checkedTeacher },
    { label: 'Student', checked: checkedStudent }
  ]
  return (
    <>
      {/* <form >
              <input type="checkbox" checked={checkedParent}  onChange={() => onChange('parent')}/> Parent
              <input type="checkbox" checked={checkedTeacher} onChange={() => onChange('teacher')}/> Teacher
              <input type="checkbox" checked={checkedStudent} onChange={() => onChange('student')}/> Student
          </form> */}
      {
        modes.map(m => (
          <>
            <SwitchButton
              label={m.label}
              onChange={onChange}
              checked={m.checked}
            />
          </>
        ))
      }
    </>
  )
}

export default SearchModes
